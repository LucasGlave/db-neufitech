import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { DatosContactoType } from 'src/common/types/datosContacto.types';

@Injectable()
export class DatosContactoService {
    constructor(
        @InjectModel(DatosContacto)
        private readonly datosContactoModel: typeof DatosContacto,
    ) {}

    findAll() {
        return this.datosContactoModel.findAll();
    }

    findOne(id: number) {
        return this.datosContactoModel.findByPk(id);
    }

    create(data: DatosContactoType) {
        return this.datosContactoModel.create(data as Partial<DatosContacto>);
    }

    update(id: number, data: DatosContactoType) {
        return this.datosContactoModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.datosContactoModel.destroy({ where: { id } });
    }
}
