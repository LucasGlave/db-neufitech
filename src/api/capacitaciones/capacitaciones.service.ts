import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Capacitacion } from '../../common/entities/capacitacion.entity';
import { CapacitacionType } from 'src/common/types/capacitacion.types'; // Updated path

@Injectable()
export class CapacitacionService {
    constructor(
        @InjectModel(Capacitacion)
        private capacitacionModel: typeof Capacitacion,
    ) {}

    findAll() {
        return this.capacitacionModel.findAll();
    }

    findOne(id: number) {
        return this.capacitacionModel.findByPk(id);
    }

    create(data: CapacitacionType) {
        return this.capacitacionModel.create(data as Partial<Capacitacion>);
    }

    update(id: number, data: CapacitacionType) {
        return this.capacitacionModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.capacitacionModel.destroy({ where: { id } });
    }
}
