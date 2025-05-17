import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sistema } from '../../common/entities/sistema.entity';
import { SistemaType } from 'src/common/types/sistema.types';

@Injectable()
export class SistemaService {
    constructor(
        @InjectModel(Sistema)
        private sistemaModel: typeof Sistema,
    ) {}

    findAll() {
        return this.sistemaModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.sistemaModel.findByPk(id);
    }

    create(data: SistemaType) {
        return this.sistemaModel.create(data as Partial<Sistema>);
    }

    async update(id: number, data: SistemaType) {
        const update = await this.sistemaModel.update(data, { where: { id } });
        if (update[0] === 1) return this.sistemaModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Sistemas with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.sistemaModel.destroy({ where: { id } });
    }
}
