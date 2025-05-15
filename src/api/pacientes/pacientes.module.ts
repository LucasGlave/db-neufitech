import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from '../../common/entities/paciente.entity';
import { Propietario } from '../../common/entities/propietario.entity';
import { PacienteService } from './pacientes.service';
import { PacienteController } from './pacientes.controller';

@Module({
    imports: [SequelizeModule.forFeature([Paciente, Propietario])],
    controllers: [PacienteController],
    providers: [PacienteService],
    exports: [PacienteService],
})
export class PacienteModule {}
