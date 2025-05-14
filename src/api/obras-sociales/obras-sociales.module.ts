import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ObraSocial } from '../../common/entities/obraSocial.entity';
import { ObraSocialService } from './obras-sociales.service';

@Module({
  imports: [SequelizeModule.forFeature([ObraSocial])],
  providers: [ObraSocialService],
  exports: [ObraSocialService],
})
export class ObrasSocialesModule { }
