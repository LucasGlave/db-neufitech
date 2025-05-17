import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DispositivoDeInteraccion } from '../../common/entities/dispositivoInteraccion.entity';
import { DispositivoDeInteraccionType } from 'src/common/types/dispositivoInteraccion.types'; // Updated path

@Injectable()
export class DispositivoInteraccionService {
    constructor(
        @InjectModel(DispositivoDeInteraccion)
        private dispositivoInteraccionModel: typeof DispositivoDeInteraccion,
    ) {}

    findAll() {
        return this.dispositivoInteraccionModel.findAll({
            order: [['id', 'ASC']],
        });
    }

    findOne(id: number) {
        return this.dispositivoInteraccionModel.findByPk(id);
    }

    create(data: DispositivoDeInteraccionType) {
        return this.dispositivoInteraccionModel.create(
            data as Partial<DispositivoDeInteraccion>,
        );
    }

    async update(id: number, data: DispositivoDeInteraccionType) {
        const update = await this.dispositivoInteraccionModel.update(data, {
            where: { id },
        });
        if (update[0] === 1)
            return this.dispositivoInteraccionModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Dispositivo de interaccion with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.dispositivoInteraccionModel.destroy({ where: { id } });
    }
}
