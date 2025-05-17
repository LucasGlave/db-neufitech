import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TipoDispositivo } from '../../common/entities/tipoDispositivo.entity';
import { TipoDispositivoType } from 'src/common/types/tipoDispositivo.types';

@Injectable()
export class TipoDispositivoService {
    constructor(
        @InjectModel(TipoDispositivo)
        private tipoDispositivoModel: typeof TipoDispositivo,
    ) {}

    findAll() {
        return this.tipoDispositivoModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.tipoDispositivoModel.findByPk(id);
    }

    create(data: TipoDispositivoType) {
        return this.tipoDispositivoModel.create(
            data as Partial<TipoDispositivo>,
        );
    }

    async update(id: number, data: TipoDispositivoType) {
        const update = await this.tipoDispositivoModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.tipoDispositivoModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update TipoDispositivo with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.tipoDispositivoModel.destroy({ where: { id } });
    }
}
