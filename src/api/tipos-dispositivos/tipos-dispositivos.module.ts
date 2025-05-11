import { Module } from '@nestjs/common';
import { TiposDispositivosService } from './tipos-dispositivos.service';

@Module({
  providers: [TiposDispositivosService]
})
export class TiposDispositivosModule {}
