import { Controller, Get, Query, Param } from '@nestjs/common';
import { DatosContactoService } from './datos-contacto.service';

@Controller('datos-contacto')
export class DatosContactoController {
    constructor(private readonly datosContactoService: DatosContactoService) {}

    @Get()
    findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
        return this.datosContactoService.findAll(+page, +limit);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.datosContactoService.findOne(+id);
    }

    @Get('search/paciente')
    findByPaciente(
        @Query('pacienteId') pacienteId: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.datosContactoService.findByPaciente(
            +pacienteId,
            +page,
            +limit,
        );
    }

    @Get('search/relacion')
    searchByRelacion(
        @Query('relacion') relacion: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.datosContactoService.searchByRelacion(
            relacion,
            +page,
            +limit,
        );
    }
}
