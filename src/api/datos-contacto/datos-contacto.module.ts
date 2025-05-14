import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { DatosContactoService } from './datos-contacto.service';

@Module({
  imports: [SequelizeModule.forFeature([DatosContacto])], // Register the DatosContacto model
  providers: [DatosContactoService],
  exports: [DatosContactoService], // Export if needed in other modules
})
export class DatosContactoModule { }
