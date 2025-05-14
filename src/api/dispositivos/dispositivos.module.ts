import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dispositivo } from '../../common/entities/dispositivo.entity';
import { DispositivoService } from './dispositivos.service';

@Module({
  imports: [SequelizeModule.forFeature([Dispositivo])],
  providers: [DispositivoService],
  exports: [DispositivoService],
})
export class DispositivosModule { }
