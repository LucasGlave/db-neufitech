import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Dispositivo } from '../../common/entities/dispositivo.entity';
import { DispositivoType } from 'src/common/types/dispositivo.types'; // Updated path

@Injectable()
export class DispositivoService {
    constructor(
        @InjectModel(Dispositivo)
        private dispositivoModel: typeof Dispositivo,
    ) {}

    findAll() {
        return this.dispositivoModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.dispositivoModel.findByPk(id);
    }

    create(data: DispositivoType) {
        return this.dispositivoModel.create(data as Partial<Dispositivo>);
    }

    async update(id: number, data: DispositivoType) {
        const update = await this.dispositivoModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.dispositivoModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Dispositivo with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.dispositivoModel.destroy({ where: { id } });
    }
}
