import { Module } from '@nestjs/common';
import { MembresiasService } from './membresias.service';

@Module({
  providers: [MembresiasService]
})
export class MembresiasModule {}
