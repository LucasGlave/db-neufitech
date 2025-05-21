import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ContenidoUsuario } from '../../common/entities/contenidoUsuario.entity';
import { Propietario } from 'src/common/entities/propietario.entity';
import {
    ContenidoUsuarioType,
    enumFieldsTipos,
} from 'src/common/types/contenidoUsuario.types';
import { validateEnum } from 'src/utils/validateFields';

@Injectable()
export class ContenidoUsuarioService {
    constructor(
        @InjectModel(ContenidoUsuario)
        private readonly contenidoUsuarioModel: typeof ContenidoUsuario,
        @InjectModel(Propietario)
        private readonly propietarioModel: typeof Propietario,
    ) {}

    findAll() {
        return this.contenidoUsuarioModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.contenidoUsuarioModel.findByPk(id);
    }

    async findByUser(id: number) {
        let propietario = await this.propietarioModel.findByPk(id);
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${id}`,
            );
        }
        return this.contenidoUsuarioModel.findAll({
            where: { propietario_id: propietario.id },
        });
    }

    async findByUserAndType(id: number, tipo: string) {
        validateEnum(tipo, enumFieldsTipos);
        let propietario = await this.propietarioModel.findByPk(id);
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${id}.`,
            );
        }
        const response = await this.contenidoUsuarioModel.findAll({
            where: { propietario_id: id, tipo: tipo },
        });
        if (response) {
            return response[0].contenido;
        }
        throw new BadRequestException(
            `No se encontró el contenido con id ${id}.`,
        );
    }

    async create(data: ContenidoUsuarioType) {
        validateEnum(data.tipo, enumFieldsTipos);
        let propietario = await this.propietarioModel.findByPk(
            data.propietario_id,
        );
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${data.propietario_id}.`,
            );
        }
        const existingTipoContenido = await this.contenidoUsuarioModel.findOne({
            where: { propietario_id: data.propietario_id, tipo: data.tipo },
        });
        if (existingTipoContenido) {
            throw new BadRequestException(
                `Ya existe un contenido con el tipo ${data.tipo} para el propietario con id ${data.propietario_id}.`,
            );
        }
        return this.contenidoUsuarioModel.create({
            contenido: JSON.stringify(data.contenido),
            propietario_id: propietario.id,
            tipo: data.tipo,
        });
    }

    async createDefaults(id: number, data: { categorias: string }) {
        try {
            let propietario = await this.propietarioModel.findByPk(id);
            if (!propietario) {
                throw new BadRequestException(
                    `No se encontró el propietario con id ${id}.`,
                );
            }
            const tipos = [
                {
                    tipo: 'categorias',
                    contenido: JSON.stringify(data.categorias),
                },
                { tipo: 'rutas', contenido: '[]' },
                {
                    tipo: 'rutinas',
                    contenido: `{"dailyRoutine": [], "weeklyRoutine": [], "monthlyRoutine": [], "specificRoutine": []}`,
                },
                { tipo: 'notas', contenido: '[]' },
            ];
            const results: Array<
                | { tipo: string; created: true; id: number }
                | { tipo: string; created: false; reason: string }
                | { tipo: string; created: false; error: string }
            > = [];
            for (const entry of tipos) {
                try {
                    const exists = await this.contenidoUsuarioModel.findOne({
                        where: { propietario_id: id, tipo: entry.tipo },
                    });
                    if (!exists) {
                        const created = await this.contenidoUsuarioModel.create(
                            {
                                contenido: entry.contenido,
                                propietario_id: id,
                                tipo: entry.tipo,
                            },
                        );
                        results.push({
                            tipo: entry.tipo,
                            created: true,
                            id: created.id,
                        });
                    } else {
                        results.push({
                            tipo: entry.tipo,
                            created: false,
                            reason: 'Ya existe',
                        });
                    }
                } catch (err) {
                    results.push({
                        tipo: entry.tipo,
                        created: false,
                        error: err.message,
                    });
                }
            }
            return results;
        } catch (err) {
            return {
                error: err.message || 'Error inesperado al crear defaults.',
            };
        }
    }

    async update(data: ContenidoUsuarioType) {
        validateEnum(data.tipo, enumFieldsTipos);

        const propietario = await this.propietarioModel.findByPk(
            data.propietario_id,
        );
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${data.propietario_id}.`,
            );
        }

        const contenido = await this.contenidoUsuarioModel.findOne({
            where: { propietario_id: data.propietario_id, tipo: data.tipo },
        });

        if (!contenido) {
            throw new BadRequestException(
                `No se encontró contenido con el tipo "${data.tipo}" para el propietario con id ${data.propietario_id}.`,
            );
        }
        const update = await contenido.update({
            contenido: JSON.stringify(data.contenido),
        });
        console.log('update', update.contenido);
        return update[0] === 1;
    }

    async delete(id: number) {
        return this.contenidoUsuarioModel.destroy({ where: { id } });
    }
}
