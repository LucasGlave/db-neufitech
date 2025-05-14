import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DispositivoDeInteraccion } from '../../common/entities/dispositivoInteraccion.entity';
import { DispositivoInteraccionService } from './dispositivos-interaccion.service';

@Module({
  imports: [SequelizeModule.forFeature([DispositivoDeInteraccion])],
  providers: [DispositivoInteraccionService],
  exports: [DispositivoInteraccionService],
})
export class DispositivosInteraccionModule { }
