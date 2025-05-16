import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { PacienteService } from './pacientes.service';
import { PacienteController } from './pacientes.controller';
import { Profesional } from 'src/common/entities/profesional.entity';
import { DatosContacto } from 'src/common/entities/datosContacto.entity';
import { Origen } from 'src/common/entities/origen.entity';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Paciente,
            Propietario,
            Profesional,
            DatosContacto,
            Origen,
        ]),
    ],
    controllers: [PacienteController],
    providers: [PacienteService],
    exports: [PacienteService],
})
export class PacienteModule {}
