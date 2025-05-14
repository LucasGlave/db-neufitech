import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SolicitudDeCambio } from '../../common/entities/solicitudCambio.entity';
import { SolicitudDeCambioService } from './solicitudes-cambio.service';

@Module({
  imports: [SequelizeModule.forFeature([SolicitudDeCambio])],
  providers: [SolicitudDeCambioService],
  exports: [SolicitudDeCambioService],
})
export class SolicitudesCambioModule { }
