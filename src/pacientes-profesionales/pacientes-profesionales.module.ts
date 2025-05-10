import { Module } from '@nestjs/common';
import { TablaPacienteProfesionalService } from './pacientes-profesionales.service';

@Module({
  providers: [TablaPacienteProfesionalService]
})
export class TablaPacienteProfesionalModule { }
