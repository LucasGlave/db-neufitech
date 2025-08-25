import { Controller, Get, Query } from '@nestjs/common';
import { PacienteProfesionalService } from './paciente-profesional.service.js';

@Controller('paciente-profesional')
export class PacienteProfesionalController {
    constructor(
        private readonly pacienteProfesionalService: PacienteProfesionalService,
    ) {}

    @Get()
    findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
        return this.pacienteProfesionalService.findAll(+page, +limit);
    }

    @Get('by-paciente')
    findByPaciente(
        @Query('pacienteId') pacienteId: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.pacienteProfesionalService.findByPaciente(
            +pacienteId,
            +page,
            +limit,
        );
    }

    @Get('by-profesional')
    findByProfesional(
        @Query('profesionalId') profesionalId: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.pacienteProfesionalService.findByProfesional(
            +profesionalId,
            +page,
            +limit,
        );
    }
}
