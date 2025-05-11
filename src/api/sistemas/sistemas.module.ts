import { Module } from '@nestjs/common';
import { SistemasService } from './sistemas.service';

@Module({
  providers: [SistemasService]
})
export class SistemasModule {}
