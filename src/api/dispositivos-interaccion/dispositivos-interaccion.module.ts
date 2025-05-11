import { Module } from '@nestjs/common';
import { DispositivosInteraccionService } from './dispositivos-interaccion.service';

@Module({
  providers: [DispositivosInteraccionService]
})
export class DispositivosInteraccionModule {}
