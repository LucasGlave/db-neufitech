import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';
import { PacienteType } from 'src/common/types';

@Injectable()
export class PacienteService {
    constructor(
        @InjectModel(Paciente)
        private pacienteModel: typeof Paciente
    ) { }

    findAll() {
        return this.pacienteModel.findAll();
    }

    findOne(id: number) {
        return this.pacienteModel.findByPk(id);
    }

    create(data: PacienteType) {
        return this.pacienteModel.create(data as Partial<Paciente>);
    }

    update(id: number, data: PacienteType) {
        return this.pacienteModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.pacienteModel.destroy({ where: { id } });
    }
}
