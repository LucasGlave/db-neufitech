import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';

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

    create(data: any) {
        return this.pacienteModel.create(data);
    }

    update(id: number, data: any) {
        return this.pacienteModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.pacienteModel.destroy({ where: { id } });
    }
}
