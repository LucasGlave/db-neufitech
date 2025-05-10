import { Module } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';

@Module({
  providers: [DispositivosService]
})
export class DispositivosModule {}
