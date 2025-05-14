import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Organizacion } from '../../common/entities/organizacion.entity';
import { OrganizacionType } from 'src/common/types';

@Injectable()
export class OrganizacionService {
    constructor(
        @InjectModel(Organizacion)
        private organizacionModel: typeof Organizacion
    ) { }

    findAll() {
        return this.organizacionModel.findAll();
    }

    findOne(id: number) {
        return this.organizacionModel.findByPk(id);
    }

    create(data: OrganizacionType) {
        return this.organizacionModel.create(data as Partial<Organizacion>);
    }

    update(id: number, data: OrganizacionType) {
        return this.organizacionModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.organizacionModel.destroy({ where: { id } });
    }
}
