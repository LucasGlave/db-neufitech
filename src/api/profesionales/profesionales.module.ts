import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { ProfesionalService } from './profesionales.service';
import { ProfesionalesController } from './profesionales.controller';
import { Propietario } from 'src/common/entities/propietario.entity';
import { Paciente } from 'src/common/entities/paciente.entity';

@Module({
    imports: [SequelizeModule.forFeature([Profesional, Propietario, Paciente])],
    controllers: [ProfesionalesController],
    providers: [ProfesionalService],
    exports: [ProfesionalService],
})
export class ProfesionalesModule {}
