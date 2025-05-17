import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Capacitador } from '../../common/entities/capacitador.entity';
import { CapacitadorType } from 'src/common/types/capacitador.types';

@Injectable()
export class CapacitadorService {
    constructor(
        @InjectModel(Capacitador)
        private readonly capacitadorModel: typeof Capacitador,
    ) {}

    findAll() {
        return this.capacitadorModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.capacitadorModel.findByPk(id);
    }

    create(data: CapacitadorType) {
        return this.capacitadorModel.create(data as Partial<Capacitador>);
    }

    async update(id: number, data: CapacitadorType) {
        const update = await this.capacitadorModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.capacitadorModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Capacitador with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.capacitadorModel.destroy({ where: { id } });
    }
}
