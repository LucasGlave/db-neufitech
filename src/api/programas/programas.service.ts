import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Programa } from '../../common/entities/programa.entity';
import { ProgramaType } from 'src/common/types/programa.types';

@Injectable()
export class ProgramaService {
    constructor(
        @InjectModel(Programa)
        private readonly programaModel: typeof Programa,
    ) {}

    findAll() {
        return this.programaModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.programaModel.findByPk(id);
    }

    async findByName(nombre: string) {
        return this.programaModel.findOne({ where: { nombre } });
    }

    async create(data: ProgramaType) {
        const existingPrograma = await this.findByName(data.nombre);
        if (existingPrograma) {
            throw new BadRequestException(
                `A program with the name "${data.nombre}" already exists.`,
            );
        }
        return this.programaModel.create(data as Partial<Programa>);
    }

    async update(id: number, data: ProgramaType) {
        const update = await this.programaModel.update(data, { where: { id } });
        if (update[0] === 1) return this.programaModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Programas with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.programaModel.destroy({ where: { id } });
    }
}
