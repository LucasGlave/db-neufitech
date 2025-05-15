import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ObraSocial } from '../../common/entities/obraSocial.entity';
import { ObraSocialType } from 'src/common/types/obraSocial.types';

@Injectable()
export class ObraSocialService {
    constructor(
        @InjectModel(ObraSocial)
        private obraSocialModel: typeof ObraSocial,
    ) {}

    findAll() {
        return this.obraSocialModel.findAll();
    }

    findOne(id: number) {
        return this.obraSocialModel.findByPk(id);
    }

    create(data: ObraSocialType) {
        return this.obraSocialModel.create(data as Partial<ObraSocial>);
    }

    update(id: number, data: ObraSocialType) {
        return this.obraSocialModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.obraSocialModel.destroy({ where: { id } });
    }
}
