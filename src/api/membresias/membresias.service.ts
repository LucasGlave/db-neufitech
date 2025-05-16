import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { Sistema } from '../../common/entities/sistema.entity';
import { Programa } from '../../common/entities/programa.entity';
import { MembresiaType } from 'src/common/types/membresia.types';

@Injectable()
export class MembresiaService {
    constructor(
        @InjectModel(Membresia)
        private readonly membresiaModel: typeof Membresia,
        @InjectModel(Sistema)
        private readonly sistemaModel: typeof Sistema,
        @InjectModel(Programa)
        private readonly programaModel: typeof Programa,
    ) {}

    findAll() {
        return this.membresiaModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.membresiaModel.findByPk(id);
    }

    async create(data: MembresiaType) {
        const sistema = await this.sistemaModel.findByPk(data.id_sistema);
        if (!sistema) {
            throw new BadRequestException(
                'Invalid id_sistema: Sistema does not exist',
            );
        }
        if (data.programaIds) {
            const programas = await this.programaModel.findAll();
            const programsNotExists = data.programaIds.filter(
                (programaId: number) =>
                    !programas.some((programa) => programa.id === programaId),
            );
            if (programsNotExists.length > 0) {
                throw new BadRequestException(
                    `Invalid programaIds: ${programsNotExists.join(', ')}`,
                );
            }
        }
        return this.membresiaModel.create(data as Partial<Membresia>);
    }

    update(id: number, data: MembresiaType) {
        return this.membresiaModel.update(data, { where: { id } });
    }

    async patch(id: number, data: any) {
        if (data.programaIds) {
            const programas = await this.programaModel.findAll();
            const programsNotExists = data.programaIds.filter(
                (programaId: number) =>
                    !programas.some((programa) => programa.id === programaId),
            );
            if (programsNotExists.length > 0) {
                throw new BadRequestException(
                    `Invalid programaIds: ${programsNotExists.join(', ')}`,
                );
            }
        }
        const cambio = await this.membresiaModel.findByPk(id);
        if (!cambio) {
            throw new BadRequestException('Membresia not found');
        }
        Object.assign(cambio, data);
        return this.membresiaModel.update(cambio, { where: { id } });
    }

    delete(id: number) {
        return this.membresiaModel.destroy({ where: { id } });
    }
}
