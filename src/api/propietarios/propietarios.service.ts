import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Propietario } from '../../common/entities/propietario.entity';

@Injectable()
export class PropietarioService {
    constructor(
        @InjectModel(Propietario)
        private readonly propietarioModel: typeof Propietario,
    ) { }

    findAll() {
        return this.propietarioModel.findAll();
    }

    findOne(id: number) {
        return this.propietarioModel.findByPk(id);
    }

    create(data: any) {
        return this.propietarioModel.create(data);
    }

    update(id: number, data: any) {
        return this.propietarioModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.propietarioModel.destroy({ where: { id } });
    }
}
