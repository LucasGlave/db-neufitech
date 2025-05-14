import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sistema } from '../../common/entities/sistema.entity';
import { SistemaService } from './sistemas.service';

@Module({
  imports: [SequelizeModule.forFeature([Sistema])],
  providers: [SistemaService],
  exports: [SistemaService],
})
export class SistemasModule { }
