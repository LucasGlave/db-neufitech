import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ObraSocial } from '../../common/entities/obraSocial.entity';
import { ObraSocialType } from 'src/common/types/obraSocial.types';
import { Op } from 'sequelize';

@Injectable()
export class ObraSocialService {
    constructor(
        @InjectModel(ObraSocial)
        private obraSocialModel: typeof ObraSocial,
    ) {}

    async findAll(page: number = 1, limit: number = 20) {
        const offset = (page - 1) * limit;
        const { count, rows } = await this.obraSocialModel.findAndCountAll({
            offset,
            limit,
            order: [['id', 'ASC']],
        });

        return {
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async searchByName(name: string, page: number = 1, limit: number = 20) {
        if (!name) {
            throw new BadRequestException('Name parameter is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.obraSocialModel.findAndCountAll({
            where: {
                nombre: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            offset,
            limit,
            order: [['id', 'ASC']],
        });

        return {
            data: rows,
            pagination: {
                page,
                limit,
                total: count,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    findOne(id: number) {
        return this.obraSocialModel.findByPk(id);
    }

    create(data: ObraSocialType) {
        return this.obraSocialModel.create(data as Partial<ObraSocial>);
    }

    async update(id: number, data: ObraSocialType) {
        const obra = await this.obraSocialModel.findByPk(id);
        if (!obra) {
            throw new BadRequestException(
                `Obra social con id ${id} no encontrada.`,
            );
        }
        const update = await this.obraSocialModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.obraSocialModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Obra social with id ${id}.`,
        );
    }

    async delete(id: number) {
        const obra = await this.obraSocialModel.findByPk(id);
        if (!obra) {
            throw new BadRequestException(
                `Obra social con id ${id} no encontrada.`,
            );
        }
        return this.obraSocialModel.destroy({ where: { id } });
    }
}
