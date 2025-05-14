import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TipoDispositivo } from '../../common/entities/tipoDispositivo.entity';
import { TipoDispositivoType } from 'src/common/types';

@Injectable()
export class TipoDispositivoService {
    constructor(
        @InjectModel(TipoDispositivo)
        private tipoDispositivoModel: typeof TipoDispositivo
    ) { }

    findAll() {
        return this.tipoDispositivoModel.findAll();
    }

    findOne(id: number) {
        return this.tipoDispositivoModel.findByPk(id);
    }

    create(data: TipoDispositivoType) {
        return this.tipoDispositivoModel.create(data as Partial<TipoDispositivo>);
    }

    update(id: number, data: TipoDispositivoType) {
        return this.tipoDispositivoModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.tipoDispositivoModel.destroy({ where: { id } });
    }
}
