import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Programa } from '../../common/entities/programa.entity';
import { ProgramaType } from 'src/common/types/programa.types';

@Injectable()
export class ProgramaService {
    constructor(
        @InjectModel(Programa)
        private programaModel: typeof Programa,
    ) {}

    findAll() {
        return this.programaModel.findAll();
    }

    findOne(id: number) {
        return this.programaModel.findByPk(id);
    }

    create(data: ProgramaType) {
        return this.programaModel.create(data as Partial<Programa>);
    }

    update(id: number, data: ProgramaType) {
        return this.programaModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.programaModel.destroy({ where: { id } });
    }
}
