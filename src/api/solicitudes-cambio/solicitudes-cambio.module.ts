import { Module } from '@nestjs/common';
import { SolicitudesCambioService } from './solicitudes-cambio.service';

@Module({
  providers: [SolicitudesCambioService]
})
export class SolicitudesCambioModule {}
