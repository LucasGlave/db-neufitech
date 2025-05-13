import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profesional } from '../../common/entities/profesional.entity';
import { ProfesionalService } from './profesionales.service';
import { ProfesionalesController } from './profesionales.controller';

@Module({
  imports: [SequelizeModule.forFeature([Profesional])], // Register the Profesional model
  controllers: [ProfesionalesController],
  providers: [ProfesionalService],
  exports: [ProfesionalService], // Export if needed in other modules
})
export class ProfesionalesModule { }
