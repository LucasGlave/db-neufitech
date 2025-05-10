import { Module } from '@nestjs/common';
import { DuenoService } from './duenos.service';

@Module({
  providers: [DuenoService]
})
export class DuenoModule { }
