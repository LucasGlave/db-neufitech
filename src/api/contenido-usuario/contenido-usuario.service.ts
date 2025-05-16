import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ContenidoUsuario } from '../../common/entities/contenidoUsuario.entity';
import { Propietario } from 'src/common/entities/propietario.entity';

@Injectable()
export class ContenidoUsuarioService {
    constructor(
        @InjectModel(ContenidoUsuario)
        private readonly contenidoUsuarioModel: typeof ContenidoUsuario,
        @InjectModel(Propietario)
        private readonly propietarioModel: typeof Propietario,
    ) {}

    findAll() {
        return this.contenidoUsuarioModel.findAll();
    }

    findOne(id: number) {
        return this.contenidoUsuarioModel.findByPk(id);
    }

    async findByUser(id: number, tipo_propietario: string) {
        let propietario = await this.propietarioModel.findOne({
            where: { foreign_key: id, tipo: tipo_propietario },
        });
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${id}`,
            );
        }
        return this.contenidoUsuarioModel.findAll({
            where: { propietario_id: propietario.id },
        });
    }

    async findByUserAndType(
        id: number,
        tipo_propietario: string,
        tipo: string,
    ) {
        let propietario = await this.propietarioModel.findOne({
            where: { foreign_key: id, tipo: tipo_propietario },
        });
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${id} y rol ${tipo_propietario}.`,
            );
        }
        return this.contenidoUsuarioModel.findAll({
            where: { propietario_id: propietario.id, tipo: tipo },
        });
    }

    async create(data: any) {
        let propietario = await this.propietarioModel.findOne({
            where: {
                foreign_key: data.propietario_id,
                tipo: data.tipo_propietario,
            },
        });
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${data.propietario_id} y rol ${data.tipo_propietario}.`,
            );
        }
        // Check for duplicate ContenidoUsuario
        const existing = await this.contenidoUsuarioModel.findOne({
            where: {
                propietario_id: propietario.id,
                tipo: data.tipo,
            },
        });
        if (existing) {
            throw new BadRequestException(
                `Ya existe un contenidoUsuario con tipo '${data.tipo}' para el propietario con id ${data.propietario_id}.`,
            );
        }
        return this.contenidoUsuarioModel.create({
            contenido: data.contenido,
            propietario_id: propietario.id,
            tipo: data.tipo,
        });
    }

    async update(data: any) {
        let propietario = await this.propietarioModel.findOne({
            where: {
                foreign_key: data.propietario_id,
                tipo: data.tipo_propietario,
            },
        });
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${data.propietario_id} y rol ${data.tipo_propietario}.`,
            );
        }
        return this.contenidoUsuarioModel.update(data, {
            where: {
                propietario_id: propietario.id,
                tipo: data.tipo,
            },
        });
    }

    async delete(data: {
        propietario_id: number;
        tipo_propietario: string;
        tipo: string;
    }) {
        let propietario = await this.propietarioModel.findOne({
            where: {
                foreign_key: data.propietario_id,
                tipo: data.tipo_propietario,
            },
        });
        if (!propietario) {
            throw new BadRequestException(
                `No se encontró el propietario con id ${data.propietario_id} y rol ${data.tipo_propietario}.`,
            );
        }
        return this.contenidoUsuarioModel.destroy({
            where: {
                propietario_id: propietario.id,
                tipo: data.tipo,
            },
        });
    }
}
