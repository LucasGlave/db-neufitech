import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from '../common/entities/paciente.entity';
import { PacienteService } from './pacientes.service';
import { PacienteController } from './pacientes.controller';

@Module({
  imports: [SequelizeModule.forFeature([Paciente])],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule { }
