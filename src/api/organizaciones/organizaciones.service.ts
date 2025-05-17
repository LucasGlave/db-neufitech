import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Organizacion } from '../../common/entities/organizacion.entity';
import { OrganizacionType } from 'src/common/types/organizacion.types';

@Injectable()
export class OrganizacionService {
    constructor(
        @InjectModel(Organizacion)
        private organizacionModel: typeof Organizacion,
    ) {}

    findAll() {
        return this.organizacionModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.organizacionModel.findByPk(id);
    }

    create(data: OrganizacionType) {
        return this.organizacionModel.create(data as Partial<Organizacion>);
    }

    async update(id: number, data: OrganizacionType) {
        const update = await this.organizacionModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.organizacionModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Organizacion with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.organizacionModel.destroy({ where: { id } });
    }
}
