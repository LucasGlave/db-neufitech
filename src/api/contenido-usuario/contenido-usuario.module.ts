import { Module } from '@nestjs/common';
import { ContenidoUsuarioService } from './contenido-usuario.service';

@Module({
  providers: [ContenidoUsuarioService]
})
export class ContenidoUsuarioModule {}
