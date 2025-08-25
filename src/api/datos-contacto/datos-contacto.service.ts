import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { Paciente } from '../../common/entities/paciente.entity';
import { Op } from 'sequelize';

@Injectable()
export class DatosContactoService {
    constructor(
        @InjectModel(DatosContacto)
        private readonly datosContactoModel: typeof DatosContacto,
        @InjectModel(Paciente)
        private readonly pacienteModel: typeof Paciente,
    ) {}

    async findAll(page: number = 1, limit: number = 20) {
        const offset = (page - 1) * limit;
        const { count, rows } = await this.datosContactoModel.findAndCountAll({
            offset,
            limit,
            include: [
                {
                    model: this.pacienteModel,
                    as: 'paciente',
                    attributes: [
                        'id',
                        'nombre_completo',
                        'documento',
                        'diagnostico',
                        'pais',
                        'provincia',
                        'ciudad',
                    ],
                },
            ],
            order: [['id', 'ASC']],
        });

        return {
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async findOne(id: number) {
        if (!id) {
            throw new BadRequestException('ID is required');
        }

        const datosContacto = await this.datosContactoModel.findByPk(id, {
            include: [
                {
                    model: this.pacienteModel,
                    as: 'paciente',
                    attributes: [
                        'id',
                        'nombre_completo',
                        'documento',
                        'diagnostico',
                        'pais',
                        'provincia',
                        'ciudad',
                        'direccion',
                        'fecha_nacimiento',
                    ],
                },
            ],
        });

        if (!datosContacto) {
            throw new BadRequestException(
                `DatosContacto with ID ${id} not found`,
            );
        }

        return datosContacto;
    }

    async findByPaciente(
        pacienteId: number,
        page: number = 1,
        limit: number = 20,
    ) {
        if (!pacienteId) {
            throw new BadRequestException('Paciente ID is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.datosContactoModel.findAndCountAll({
            where: {
                paciente_id: pacienteId,
            },
            offset,
            limit,
            include: [
                {
                    model: this.pacienteModel,
                    as: 'paciente',
                    attributes: [
                        'id',
                        'nombre_completo',
                        'documento',
                        'diagnostico',
                        'pais',
                        'provincia',
                        'ciudad',
                    ],
                },
            ],
            order: [['id', 'ASC']],
        });

        return {
            paciente_id: pacienteId,
            contactos_registrados: count,
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async searchByRelacion(
        relacion: string,
        page: number = 1,
        limit: number = 20,
    ) {
        if (!relacion) {
            throw new BadRequestException('Relacion parameter is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.datosContactoModel.findAndCountAll({
            where: {
                relacion: {
                    [Op.iLike]: `%${relacion}%`,
                },
            },
            offset,
            limit,
            include: [
                {
                    model: this.pacienteModel,
                    as: 'paciente',
                    attributes: [
                        'id',
                        'nombre_completo',
                        'documento',
                        'diagnostico',
                        'pais',
                        'provincia',
                        'ciudad',
                    ],
                },
            ],
            order: [['id', 'ASC']],
        });

        return {
            relacion_buscada: relacion,
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }
}
