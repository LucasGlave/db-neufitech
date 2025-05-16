import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Organizacion } from '../../common/entities/organizacion.entity';
import { OrganizacionType } from 'src/common/types/organizacion.types';

@Injectable()
export class OrganizacionesService {
    constructor(
        @InjectModel(Organizacion)
        private organizacionModel: typeof Organizacion,
    ) {}

    findAll() {
        return this.organizacionModel.findAll({ order: [['id', 'ASC']] });
    }

    async findOne(id: number) {
        let org = await this.organizacionModel.findByPk(id);
        if (!org) {
            throw new NotFoundException('Organización no encontrada');
        }
        return org;
    }

    create(data: OrganizacionType) {
        return this.organizacionModel.create(data as Partial<Organizacion>);
    }

    async update(id: number, data: OrganizacionType) {
        const org = await this.organizacionModel.findByPk(id);
        if (!org) {
            throw new NotFoundException('Organización no encontrada');
        }
        return this.organizacionModel.update(data, { where: { id } });
    }

    async delete(id: number) {
        const org = await this.organizacionModel.findByPk(id);
        if (!org) {
            throw new NotFoundException('Organización no encontrada');
        }
        return this.organizacionModel.destroy({ where: { id } });
    }

    async patch(id: number, data: any) {
        const organizacion = await this.organizacionModel.findByPk(id);
        if (!organizacion) {
            throw new NotFoundException('Organización no encontrada');
        }
        Object.assign(organizacion, data);
        return await this.organizacionModel.update(data, { where: { id } });
    }
}
