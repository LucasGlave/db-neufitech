import { BadRequestException, Injectable } from '@nestjs/common';
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
        return this.obraSocialModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.obraSocialModel.findByPk(id);
    }

    create(data: ObraSocialType) {
        return this.obraSocialModel.create(data as Partial<ObraSocial>);
    }

    async update(id: number, data: ObraSocialType) {
        const update = await this.obraSocialModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.obraSocialModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Obra social with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.obraSocialModel.destroy({ where: { id } });
    }
}
