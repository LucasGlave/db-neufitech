import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';

@Injectable()
export class ProfesionalService {
    constructor(
        @InjectModel(Profesional)
        private readonly profesionalModel: typeof Profesional,
    ) { }

    findAll() {
        return this.profesionalModel.findAll();
    }

    findOne(id: number) {
        return this.profesionalModel.findByPk(id);
    }

    create(data: any) {
        return this.profesionalModel.create(data);
    }

    update(id: number, data: any) {
        return this.profesionalModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.profesionalModel.destroy({ where: { id } });
    }
}

