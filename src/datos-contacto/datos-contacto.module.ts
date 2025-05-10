import { Module } from '@nestjs/common';
import { DatosContactoService } from './datos-contacto.service';

@Module({
  providers: [DatosContactoService]
})
export class DatosContactoModule {}
