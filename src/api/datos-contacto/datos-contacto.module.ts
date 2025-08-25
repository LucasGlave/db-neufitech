import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { Paciente } from '../../common/entities/paciente.entity';
import { DatosContactoService } from './datos-contacto.service';
import { DatosContactoController } from './datos-contacto.controller';

@Module({
    imports: [SequelizeModule.forFeature([DatosContacto, Paciente])],
    controllers: [DatosContactoController],
    providers: [DatosContactoService],
    exports: [DatosContactoService],
})
export class DatosContactoModule {}
