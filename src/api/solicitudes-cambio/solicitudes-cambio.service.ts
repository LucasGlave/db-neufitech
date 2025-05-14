import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SolicitudDeCambio } from '../../common/entities/solicitudCambio.entity';
import { SolicitudDeCambioType } from 'src/common/types';

@Injectable()
export class SolicitudDeCambioService {
    constructor(
        @InjectModel(SolicitudDeCambio)
        private pacienteModel: typeof SolicitudDeCambio
    ) { }

    findAll() {
        return this.pacienteModel.findAll();
    }

    findOne(id: number) {
        return this.pacienteModel.findByPk(id);
    }

    create(data: SolicitudDeCambioType) {
        return this.pacienteModel.create(data as Partial<SolicitudDeCambio>);
    }

    update(id: number, data: SolicitudDeCambioType) {
        return this.pacienteModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.pacienteModel.destroy({ where: { id } });
    }
}
