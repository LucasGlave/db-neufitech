import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { MembresiaType } from 'src/common/types';

@Injectable()
export class MembresiaService {
    constructor(
        @InjectModel(Membresia)
        private membresiaModel: typeof Membresia
    ) { }

    findAll() {
        return this.membresiaModel.findAll();
    }

    findOne(id: number) {
        return this.membresiaModel.findByPk(id);
    }

    create(data: MembresiaType) {
        return this.membresiaModel.create(data as Partial<Membresia>);
    }

    update(id: number, data: MembresiaType) {
        return this.membresiaModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.membresiaModel.destroy({ where: { id } });
    }
}
