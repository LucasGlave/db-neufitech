import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SolicitudDeCambio } from '../../common/entities/solicitudCambio.entity';
import {
    SolicitudDeCambioEstadoEnum,
    SolicitudDeCambioMetodoEnum,
    SolicitudDeCambioTipoEnum,
    SolicitudDeCambioType,
} from 'src/common/types/solicitudDeCambio.types';
import { PacienteService } from '../pacientes/pacientes.service';
import { ProfesionalService } from '../profesionales/profesionales.service';
import { validateEnum } from 'src/utils/validateFields';

@Injectable()
export class SolicitudDeCambioService {
    constructor(
        @InjectModel(SolicitudDeCambio)
        private solicitudCambioModel: typeof SolicitudDeCambio,
        private pacienteService: PacienteService,
        private profesionalService: ProfesionalService,
    ) {}

    findAll() {
        return this.solicitudCambioModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.solicitudCambioModel.findByPk(id);
    }

    async create(data: SolicitudDeCambioType) {
        validateEnum(data.tipo, SolicitudDeCambioTipoEnum);
        validateEnum(data.metodo, SolicitudDeCambioMetodoEnum);
        let paciente = await this.pacienteService.findOne(data.paciente_id);
        let profesional = await this.profesionalService.findOne(
            data.profesional_id,
        );
        if (!paciente || !profesional) {
            throw new BadRequestException(
                'Invalid: paciente o profesional no existe',
            );
        }
        return this.solicitudCambioModel.create(
            data as Partial<SolicitudDeCambio>,
        );
    }

    update(id: number, data: SolicitudDeCambioType) {
        validateEnum(data.tipo, SolicitudDeCambioTipoEnum);
        validateEnum(data.metodo, SolicitudDeCambioMetodoEnum);
        return this.solicitudCambioModel.update(data, { where: { id } });
    }

    async patch(id: number, data: string) {
        validateEnum(data, SolicitudDeCambioEstadoEnum);
        const cambio = await this.solicitudCambioModel.findByPk(id);
        if (!cambio) {
            throw new BadRequestException('SolicitudDeCambio not found');
        }
        cambio.estado = data;
        cambio.contenido = '';
        return this.solicitudCambioModel.update(cambio, { where: { id } });
    }

    delete(id: number) {
        return this.solicitudCambioModel.destroy({ where: { id } });
    }

    findByProfesional(profesionalId: number) {
        return this.solicitudCambioModel.findAll({
            where: { profesional_id: profesionalId },
            order: [['id', 'ASC']],
        });
    }

    findByPaciente(pacienteId: number) {
        return this.solicitudCambioModel.findAll({
            where: { paciente_id: pacienteId },
            order: [['id', 'ASC']],
        });
    }
}
