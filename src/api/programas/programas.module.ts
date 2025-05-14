import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Programa } from '../../common/entities/programa.entity';
import { ProgramaService } from './programas.service';

@Module({
  imports: [SequelizeModule.forFeature([Programa])],
  providers: [ProgramaService],
  exports: [ProgramaService],
})
export class ProgramasModule { }
