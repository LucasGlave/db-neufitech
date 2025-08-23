import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { ProfesionalType } from 'src/common/types/profesional.types';
import { Paciente } from 'src/common/entities/paciente.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProfesionalService {
    constructor(
        @InjectModel(Profesional)
        private readonly profesionalModel: typeof Profesional,
        @InjectModel(Propietario)
        private readonly propietarioModel: typeof Propietario,
        @InjectModel(Paciente)
        private readonly pacienteModel: typeof Paciente,
    ) {}

    async findAll(page: number = 1, limit: number = 20) {
        const offset = (page - 1) * limit;
        const { count, rows } = await this.profesionalModel.findAndCountAll({
            offset,
            limit,
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

    async searchByName(name: string, page: number = 1, limit: number = 20) {
        if (!name) {
            throw new BadRequestException('Name parameter is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.profesionalModel.findAndCountAll({
            where: {
                nombre_completo: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            offset,
            limit,
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

    async searchByDni(dni: string, page: number = 1, limit: number = 20) {
        if (!dni) {
            throw new BadRequestException('DNI parameter is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.profesionalModel.findAndCountAll({
            where: {
                documento: {
                    [Op.eq]: dni,
                },
            },
            offset,
            limit,
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

    findOne(id: number) {
        return this.profesionalModel.findByPk(id);
    }

    async create(data: ProfesionalType) {
        const profesional = await this.profesionalModel.create(
            data as Partial<Profesional>,
        );
        const propietario = await this.propietarioModel.create({
            tipo: 'profesional',
            foreign_key: profesional.id,
        });
        await this.profesionalModel.update(
            { ...profesional, propietario_id: propietario.id },
            { where: { id: profesional.id } },
        );
        return { ...profesional, propietario_id: propietario.id };
    }

    async update(id: number, data: any) {
        const update = await this.profesionalModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.profesionalModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Profesional with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.profesionalModel.destroy({ where: { id } });
    }

    async asignarPaciente(profesionalId: number, pacienteId: number) {
        const profesional = await this.profesionalModel.findByPk(
            profesionalId,
            {
                include: { all: true },
            },
        );
        if (!profesional) {
            throw new BadRequestException(
                `Profesional with ID ${profesionalId} does not exist`,
            );
        }
        const paciente = await this.pacienteModel.findByPk(pacienteId);
        if (!paciente) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not exist`,
            );
        }
        const alreadyAssigned =
            (await profesional.$has('pacientes', pacienteId)) ||
            (await paciente.$has('profesionales', profesionalId));
        if (alreadyAssigned) {
            throw new BadRequestException(
                `The relationship between Profesional ${profesionalId} and Paciente ${pacienteId} already exists`,
            );
        }
        await profesional.$add('pacientes', pacienteId);
        return { message: 'Paciente assigned to Profesional successfully' };
    }

    async getProfesionalAsiggns(profesionalId: number) {
        const profesional = await this.profesionalModel.findByPk(
            profesionalId,
            {
                include: { all: true },
            },
        );
        if (!profesional) {
            throw new BadRequestException(
                `Profesional with ID ${profesionalId} does not exist`,
            );
        }
        const assigned = await profesional.$get('pacientes');
        if (!assigned || assigned.length === 0) {
            throw new BadRequestException(
                `No pacientes assigned to Paciente ${profesionalId}`,
            );
        }
        return assigned;
    }
}
