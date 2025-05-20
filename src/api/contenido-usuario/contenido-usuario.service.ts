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
            contenido: data.contenido,
            propietario_id: propietario.id,
            tipo: data.tipo,
        });
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
            contenido: data.contenido,
        });
        console.log('update', update.contenido);
        return update[0] === 1;
    }

    async delete(id: number) {
        return this.contenidoUsuarioModel.destroy({ where: { id } });
    }
}
