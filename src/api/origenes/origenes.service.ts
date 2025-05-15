import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Origen } from '../../common/entities/origen.entity';
import { OrigenType } from 'src/common/types/origen.types';

@Injectable()
export class OrigenService {
    constructor(
        @InjectModel(Origen)
        private origenModel: typeof Origen,
    ) {}

    findAll() {
        return this.origenModel.findAll();
    }

    findOne(id: number) {
        return this.origenModel.findByPk(id);
    }

    create(data: OrigenType) {
        return this.origenModel.create(data as Partial<Origen>);
    }

    update(id: number, data: OrigenType) {
        return this.origenModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.origenModel.destroy({ where: { id } });
    }
}
