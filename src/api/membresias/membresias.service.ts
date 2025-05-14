import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { Sistema } from '../../common/entities/sistema.entity';
import { MembresiaType } from 'src/common/types';

@Injectable()
export class MembresiaService {
    constructor(
        @InjectModel(Membresia)
        private readonly membresiaModel: typeof Membresia,
        @InjectModel(Sistema)
        private readonly sistemaModel: typeof Sistema,
    ) { }

    findAll() {
        return this.membresiaModel.findAll();
    }

    findOne(id: number) {
        return this.membresiaModel.findByPk(id);
    }

    async create(data: MembresiaType) {
        const sistema = await this.sistemaModel.findByPk(data.id_sistema);
        if (!sistema) {
            throw new BadRequestException('Invalid id_sistema: Sistema does not exist');
        }
        return this.membresiaModel.create(data as Partial<Membresia>);
    }

    update(id: number, data: MembresiaType) {
        return this.membresiaModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.membresiaModel.destroy({ where: { id } });
    }
}
