import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PacienteProfesional } from '../../common/entities/pacienteProfesional.entity';
import { Paciente } from '../../common/entities/paciente.entity';
import { Profesional } from '../../common/entities/profesional.entity';

@Injectable()
export class PacienteProfesionalService {
    constructor(
        @InjectModel(PacienteProfesional)
        private readonly pacienteProfesionalModel: typeof PacienteProfesional,
        @InjectModel(Paciente)
        private readonly pacienteModel: typeof Paciente,
        @InjectModel(Profesional)
        private readonly profesionalModel: typeof Profesional,
    ) {}

    async findAll(page: number = 1, limit: number = 20) {
        const offset = (page - 1) * limit;
        const { count, rows } =
            await this.pacienteProfesionalModel.findAndCountAll({
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
                        ],
                    },
                    {
                        model: this.profesionalModel,
                        as: 'profesional',
                        attributes: [
                            'id',
                            'nombre_completo',
                            'documento',
                            'especialización',
                            'email',
                        ],
                    },
                ],
                order: [
                    ['paciente_id', 'ASC'],
                    ['profesional_id', 'ASC'],
                ],
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

    async findByPaciente(
        pacienteId: number,
        page: number = 1,
        limit: number = 20,
    ) {
        if (!pacienteId) {
            throw new BadRequestException('Paciente ID is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } =
            await this.pacienteProfesionalModel.findAndCountAll({
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
                        ],
                    },
                    {
                        model: this.profesionalModel,
                        as: 'profesional',
                        attributes: [
                            'id',
                            'nombre_completo',
                            'documento',
                            'especialización',
                            'email',
                        ],
                    },
                ],
                order: [['profesional_id', 'ASC']],
            });

        return {
            paciente_id: pacienteId,
            profesionales_asignados: count,
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async findByProfesional(
        profesionalId: number,
        page: number = 1,
        limit: number = 20,
    ) {
        if (!profesionalId) {
            throw new BadRequestException('Profesional ID is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } =
            await this.pacienteProfesionalModel.findAndCountAll({
                where: {
                    profesional_id: profesionalId,
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
                        ],
                    },
                    {
                        model: this.profesionalModel,
                        as: 'profesional',
                        attributes: [
                            'id',
                            'nombre_completo',
                            'documento',
                            'especialización',
                            'email',
                        ],
                    },
                ],
                order: [['paciente_id', 'ASC']],
            });

        return {
            profesional_id: profesionalId,
            pacientes_asignados: count,
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
