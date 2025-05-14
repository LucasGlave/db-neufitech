import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContenidoUsuario } from '../../common/entities/contenidoUsuario.entity';
import { ContenidoUsuarioService } from './contenido-usuario.service';

@Module({
  imports: [SequelizeModule.forFeature([ContenidoUsuario])], // Register the ContenidoUsuario model
  providers: [ContenidoUsuarioService],
  exports: [ContenidoUsuarioService], // Export if needed in other modules
})
export class ContenidoUsuarioModule { }
