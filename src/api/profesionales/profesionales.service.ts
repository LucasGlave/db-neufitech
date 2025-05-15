import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { ProfesionalType } from 'src/common/types/profesional.types';

@Injectable()
export class ProfesionalService {
    constructor(
        @InjectModel(Profesional)
        private readonly profesionalModel: typeof Profesional,
        @InjectModel(Propietario)
        private readonly propietarioModel: typeof Propietario,
    ) {}

    findAll() {
        return this.profesionalModel.findAll();
    }

    findOne(id: number) {
        return this.profesionalModel.findByPk(id);
    }

    async create(data: ProfesionalType) {
        const profesional = await this.profesionalModel.create(
            data as Partial<Profesional>,
        );
        await this.propietarioModel.create({
            tipo: 'profesional',
            foreign_key: profesional.id,
        });
        return profesional;
    }

    update(id: number, data: any) {
        return this.profesionalModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.profesionalModel.destroy({ where: { id } });
    }
}
