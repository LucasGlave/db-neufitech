import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { ProfesionalService } from './profesionales.service';
import { ProfesionalesController } from './profesionales.controller';
import { Propietario } from 'src/common/entities/propietario.entity';

@Module({
    imports: [SequelizeModule.forFeature([Profesional, Propietario])], // Register the Profesional model
    controllers: [ProfesionalesController],
    providers: [ProfesionalService],
    exports: [ProfesionalService], // Export if needed in other modules
})
export class ProfesionalesModule {}
