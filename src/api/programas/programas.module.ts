import { Module } from '@nestjs/common';
import { ProgramasService } from './programas.service';

@Module({
  providers: [ProgramasService]
})
export class ProgramasModule {}
