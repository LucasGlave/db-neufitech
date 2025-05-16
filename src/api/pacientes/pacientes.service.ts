import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { PacienteType } from 'src/common/types/paciente.types';
import { Profesional } from 'src/common/entities/profesional.entity';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { Origen } from 'src/common/entities/origen.entity';
import { validateEnum } from 'src/utils/validateFields';
import { origenTipo, OrigenType } from 'src/common/types/origen.types';

@Injectable()
export class PacienteService {
    constructor(
        @InjectModel(Paciente)
        private pacienteModel: typeof Paciente,
        @InjectModel(Propietario)
        private propietarioModel: typeof Propietario,
        @InjectModel(Profesional)
        private profesionalModel: typeof Profesional,
        @InjectModel(DatosContacto)
        private datosContactoModel: typeof DatosContacto,
        @InjectModel(Origen)
        private origenModel: typeof Origen,
    ) {}

    findAll() {
        return this.pacienteModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.pacienteModel.findByPk(id);
    }

    async create(data: PacienteType) {
        const paciente = await this.pacienteModel.create(
            data as Partial<Paciente>,
        );
        await this.propietarioModel.create({
            tipo: 'paciente',
            foreign_key: paciente.id,
        });
        return paciente;
    }

    update(id: number, data: PacienteType) {
        return this.pacienteModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.pacienteModel.destroy({ where: { id } });
    }

    async asignarProfesional(pacienteId: number, profesionalId: number) {
        const paciente = await this.pacienteModel.findByPk(pacienteId, {
            include: { all: true },
        });
        if (!paciente) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not exist`,
            );
        }
        const profesional = await this.profesionalModel.findByPk(profesionalId);
        if (!profesional) {
            throw new BadRequestException(
                `Profesional with ID ${profesionalId} does not exist`,
            );
        }
        const alreadyAssigned =
            (await paciente.$has('profesionales', profesionalId)) ||
            (await profesional.$has('pacientes', pacienteId));
        if (alreadyAssigned) {
            throw new BadRequestException(
                `The relationship between Paciente ${pacienteId} and Profesional ${profesionalId} already exists`,
            );
        }
        await paciente.$add('profesionales', profesionalId);
        return { message: 'Profesional assigned to Paciente successfully' };
    }

    async addDatosContacto(pacienteId: number, data: any) {
        const paciente = await this.pacienteModel.findByPk(pacienteId);
        if (!paciente) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not exist`,
            );
        }
        return this.datosContactoModel.create({
            ...data,
            paciente_id: pacienteId,
        });
    }

    async updateDatosContacto(pacienteId: number, data: any) {
        const datosContacto = await this.datosContactoModel.findOne({
            where: { paciente_id: pacienteId },
        });
        if (!datosContacto) {
            throw new BadRequestException(
                `DatosContacto for Paciente ID ${pacienteId} does not exist`,
            );
        }
        return datosContacto.update(data);
    }

    async getDatosContacto(pacienteId: number) {
        return this.datosContactoModel.findAll({
            where: { paciente_id: pacienteId },
            order: [['id', 'ASC']],
        });
    }

    async deleteDatosContacto(pacienteId: number) {
        const datosContacto = await this.datosContactoModel.findOne({
            where: { paciente_id: pacienteId },
        });
        if (!datosContacto) {
            throw new BadRequestException(
                `DatosContacto for Paciente ID ${pacienteId} does not exist`,
            );
        }
        return datosContacto.destroy();
    }

    async addOrigen(pacienteId: number, data: OrigenType) {
        validateEnum(data.tipo, origenTipo);
        const paciente = await this.pacienteModel.findOne({
            where: { id: pacienteId },
            attributes: ['id', 'origen_id'],
        });
        if (!paciente) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not exist`,
            );
        }
        if (paciente.dataValues.origen_id) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} already has an origen with ID ${paciente.dataValues.origen_id}`,
            );
        }
        if (data.tipo === 'profesional') {
            let profesional = await this.profesionalModel.findByPk(
                data.foreign_key,
            );
            if (!profesional) {
                throw new BadRequestException(
                    `Profesional with ID ${data.foreign_key} does not exist`,
                );
            }
        } else if (data.tipo === 'organizacion') {
            let organizacion = await this.profesionalModel.findByPk(
                data.foreign_key,
            );
            if (!organizacion) {
                throw new BadRequestException(
                    `Organizacion with ID ${data.foreign_key} does not exist`,
                );
            }
        }
        if (paciente.dataValues.origen_id) {
            throw new BadRequestException(`Pacient`);
        }

        const origen = await this.origenModel.create({
            ...data,
            paciente_id: pacienteId,
        });

        await paciente.update({ origen_id: origen.id });

        return origen;
    }

    async updateOrigen(pacienteId: number, data: OrigenType) {
        validateEnum(data.tipo, origenTipo);
        const paciente = await this.pacienteModel.findOne({
            where: { id: pacienteId },
            attributes: ['id', 'origen_id'],
        });
        if (!paciente) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not exist`,
            );
        }
        if (!paciente.dataValues.origen_id) {
            throw new BadRequestException(
                `Paciente with ID ${pacienteId} does not have an origen`,
            );
        }
        if (data.tipo === 'profesional') {
            let profesional = await this.profesionalModel.findByPk(
                data.foreign_key,
            );
            if (!profesional) {
                throw new BadRequestException(
                    `Profesional with ID ${data.foreign_key} does not exist`,
                );
            }
        } else if (data.tipo === 'organizacion') {
            let organizacion = await this.profesionalModel.findByPk(
                data.foreign_key,
            );
            if (!organizacion) {
                throw new BadRequestException(
                    `Organizacion with ID ${data.foreign_key} does not exist`,
                );
            }
        }
        const origen = await this.origenModel.findOne({
            where: { paciente_id: pacienteId },
        });
        if (!origen) {
            throw new BadRequestException(
                `Origen for Paciente ID ${pacienteId} does not exist`,
            );
        }
        return origen.update(data);
    }

    async getOrigen(pacienteId: number) {
        return this.origenModel.findAll({
            where: { paciente_id: pacienteId },
            order: [['id', 'ASC']],
        });
    }

    async deleteOrigen(pacienteId: number) {
        const origen = await this.origenModel.findOne({
            where: { paciente_id: pacienteId },
        });
        if (!origen) {
            throw new BadRequestException(
                `Origen for Paciente ID ${pacienteId} does not exist`,
            );
        }

        const paciente = await this.pacienteModel.findByPk(pacienteId);
        if (paciente) {
            await paciente.update({ origen_id: null });
        }

        return origen.destroy();
    }
}
