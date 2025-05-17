import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Capacitacion } from '../../common/entities/capacitacion.entity';
import {
    capacitacionFields,
    CapacitacionType,
    enumFieldsTipos,
} from 'src/common/types/capacitacion.types';
import { validateEnum, validateRequiredFields } from 'src/utils/validateFields';
import { Profesional } from 'src/common/entities/profesional.entity';
import { Paciente } from 'src/common/entities/paciente.entity';
import { Organizacion } from 'src/common/entities/organizacion.entity';
import { DatosContacto } from 'src/common/entities/datosContacto.entity';

@Injectable()
export class CapacitacionService {
    constructor(
        @InjectModel(Capacitacion)
        private capacitacionModel: typeof Capacitacion,
        @InjectModel(Capacitacion)
        private profesionalModel: typeof Profesional,
        @InjectModel(Capacitacion)
        private pacienteModel: typeof Paciente,
        @InjectModel(Capacitacion)
        private organizacionModel: typeof Organizacion,
        @InjectModel(Capacitacion)
        private datosContactoModel: typeof DatosContacto,
    ) {}

    findAll() {
        return this.capacitacionModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.capacitacionModel.findByPk(id);
    }

    async create(data: CapacitacionType) {
        validateEnum(data.tipo, enumFieldsTipos);
        const capacitador = await this.capacitacionModel.findByPk(
            data.capacitador_id,
        );
        if (!capacitador) {
            throw new BadRequestException(
                `Capacitador with ID ${data.capacitador_id} does not exist`,
            );
        }
        let capacitado = await this.validateCapacitado(
            data.tipo,
            data.capacitado_id,
        );
        if (!capacitado) {
            throw new BadRequestException(
                `${data.tipo} with ID ${data.capacitado_id} does not exist`,
            );
        }
        return this.capacitacionModel.create(
            data as unknown as Partial<Capacitacion>,
        );
    }

    async update(id: number, data: CapacitacionType) {
        validateEnum(data.tipo, enumFieldsTipos);
        const capacitador = await this.capacitacionModel.findByPk(
            data.capacitador_id,
        );
        if (!capacitador) {
            throw new BadRequestException(
                `Capacitador with ID ${data.capacitador_id} does not exist`,
            );
        }
        let capacitado = await this.validateCapacitado(
            data.tipo,
            data.capacitado_id,
        );
        if (!capacitado) {
            throw new BadRequestException(
                `${data.tipo} with ID ${data.capacitado_id} does not exist`,
            );
        }
        const update = await this.capacitacionModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.capacitacionModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Capacitacion with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.capacitacionModel.destroy({ where: { id } });
    }

    private async validateCapacitado(
        tipo: string,
        capacitadoId: number,
    ): Promise<any> {
        let capacitado;
        if (tipo === 'paciente') {
            capacitado = await this.pacienteModel.findByPk(capacitadoId);
        } else if (tipo === 'profesional') {
            capacitado = await this.profesionalModel.findByPk(capacitadoId);
        } else if (tipo === 'organizacion') {
            capacitado = await this.organizacionModel.findByPk(capacitadoId);
        } else if (tipo === 'contacto') {
            capacitado = await this.datosContactoModel.findByPk(capacitadoId);
        }
        return capacitado;
    }
}
