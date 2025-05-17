import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { Propietario } from 'src/common/entities/propietario.entity';
import { Paciente } from 'src/common/entities/paciente.entity';
import { Capacitacion } from 'src/common/entities/capacitacion.entity';
import { CapacitacionController } from './capacitaciones.controller';
import { CapacitacionService } from './capacitaciones.service';
import { Organizacion } from 'src/common/entities/organizacion.entity';
import { DatosContacto } from 'src/common/entities/datosContacto.entity';
import { Capacitador } from 'src/common/entities/capacitador.entity';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Profesional,
            Propietario,
            Paciente,
            Organizacion,
            DatosContacto,
            Capacitacion,
            Capacitador,
        ]),
    ],
    controllers: [CapacitacionController],
    providers: [CapacitacionService],
    exports: [CapacitacionService],
})
export class CapacitacionesModule {}
