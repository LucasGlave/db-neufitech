import { Injectable } from '@nestjs/common';
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
        return this.dispositivoModel.findAll();
    }

    findOne(id: number) {
        return this.dispositivoModel.findByPk(id);
    }

    create(data: DispositivoType) {
        return this.dispositivoModel.create(data as Partial<Dispositivo>);
    }

    update(id: number, data: DispositivoType) {
        return this.dispositivoModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.dispositivoModel.destroy({ where: { id } });
    }
}
