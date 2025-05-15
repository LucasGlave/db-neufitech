import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { PacienteType } from 'src/common/types/paciente.types';

@Injectable()
export class PacienteService {
    constructor(
        @InjectModel(Paciente)
        private pacienteModel: typeof Paciente,
        @InjectModel(Propietario)
        private propietarioModel: typeof Propietario,
    ) {}

    findAll() {
        return this.pacienteModel.findAll();
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
}
