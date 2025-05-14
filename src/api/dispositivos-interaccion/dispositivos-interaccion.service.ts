import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DispositivoDeInteraccion } from '../../common/entities/dispositivoInteraccion.entity';
import { DispositivoDeInteraccionType } from 'src/common/types';

@Injectable()
export class DispositivoInteraccionService {
    constructor(
        @InjectModel(DispositivoDeInteraccion)
        private dispositivoInteraccionModel: typeof DispositivoDeInteraccion
    ) { }

    findAll() {
        return this.dispositivoInteraccionModel.findAll();
    }

    findOne(id: number) {
        return this.dispositivoInteraccionModel.findByPk(id);
    }

    create(data: DispositivoDeInteraccionType) {
        return this.dispositivoInteraccionModel.create(data as Partial<DispositivoDeInteraccion>);
    }

    update(id: number, data: DispositivoDeInteraccionType) {
        return this.dispositivoInteraccionModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.dispositivoInteraccionModel.destroy({ where: { id } });
    }
}
