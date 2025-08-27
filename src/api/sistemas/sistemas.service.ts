import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sistema } from '../../common/entities/sistema.entity';
import { SistemaType } from 'src/common/types/sistema.types';
import { Op } from 'sequelize';

@Injectable()
export class SistemaService {
    constructor(
        @InjectModel(Sistema)
        private sistemaModel: typeof Sistema,
    ) {}

    async findAll(page: number = 1, limit: number = 20) {
        const offset = (page - 1) * limit;
        const { count, rows } = await this.sistemaModel.findAndCountAll({
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
        const { count, rows } = await this.sistemaModel.findAndCountAll({
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

    async searchByVersion(
        version: string,
        page: number = 1,
        limit: number = 20,
    ) {
        if (!version) {
            throw new BadRequestException('Version parameter is required');
        }

        const offset = (page - 1) * limit;
        const { count, rows } = await this.sistemaModel.findAndCountAll({
            where: {
                version: {
                    [Op.iLike]: `%${version}%`,
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
        return this.sistemaModel.findByPk(id);
    }

    create(data: SistemaType) {
        return this.sistemaModel.create(data as Partial<Sistema>);
    }

    async update(id: number, data: SistemaType) {
        const update = await this.sistemaModel.update(data, { where: { id } });
        if (update[0] === 1) return this.sistemaModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Sistemas with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.sistemaModel.destroy({ where: { id } });
    }
}
