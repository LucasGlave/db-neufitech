import { Module } from '@nestjs/common';
import { ProfesionalesService } from './profesionales.service';

@Module({
  providers: [ProfesionalesService]
})
export class ProfesionalesModule {}
