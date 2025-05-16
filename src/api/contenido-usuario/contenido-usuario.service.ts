import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ContenidoUsuario } from '../../common/entities/contenidoUsuario.entity';

@Injectable()
export class ContenidoUsuarioService {
    constructor(
        @InjectModel(ContenidoUsuario)
        private readonly contenidoUsuarioModel: typeof ContenidoUsuario,
    ) {}

    findAll() {
        return this.contenidoUsuarioModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.contenidoUsuarioModel.findByPk(id);
    }

    create(data: any) {
        return this.contenidoUsuarioModel.create(data);
    }

    update(id: number, data: any) {
        return this.contenidoUsuarioModel.update(data, { where: { id } });
    }

    delete(id: number) {
        return this.contenidoUsuarioModel.destroy({ where: { id } });
    }
}
