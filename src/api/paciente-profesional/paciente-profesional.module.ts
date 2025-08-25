import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PacienteProfesional } from '../../common/entities/pacienteProfesional.entity';
import { Paciente } from '../../common/entities/paciente.entity';
import { Profesional } from '../../common/entities/profesional.entity';
import { PacienteProfesionalService } from './paciente-profesional.service.js';
import { PacienteProfesionalController } from './paciente-profesional.controller.js';

@Module({
    imports: [
        SequelizeModule.forFeature([
            PacienteProfesional,
            Paciente,
            Profesional,
        ]),
    ],
    controllers: [PacienteProfesionalController],
    providers: [PacienteProfesionalService],
    exports: [PacienteProfesionalService],
})
export class PacienteProfesionalModule {}
