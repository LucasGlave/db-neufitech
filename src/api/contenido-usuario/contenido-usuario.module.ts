import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContenidoUsuario } from '../../common/entities/contenidoUsuario.entity';
import { Propietario } from '../../common/entities/propietario.entity'; // Import Propietario entity
import { ContenidoUsuarioService } from './contenido-usuario.service';
import { ContenidoUsuarioController } from './contenido-usuario.controller';

@Module({
    imports: [SequelizeModule.forFeature([ContenidoUsuario, Propietario])], // Add Propietario here
    controllers: [ContenidoUsuarioController],
    providers: [ContenidoUsuarioService],
    exports: [ContenidoUsuarioService],
})
export class ContenidoUsuarioModule {}
