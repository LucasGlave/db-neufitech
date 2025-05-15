import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
} from '@nestjs/common';
import { SolicitudDeCambioService } from './solicitudes-cambio.service';
import { SolicitudDeCambioFields } from 'src/common/types/solicitudDeCambio.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('solicitudes-cambios')
export class SolicitudDeCambioController {
    constructor(
        private readonly solicitudDeCambioService: SolicitudDeCambioService,
    ) {}

    @Get()
    findAll() {
        return this.solicitudDeCambioService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.solicitudDeCambioService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, SolicitudDeCambioFields);
        return this.solicitudDeCambioService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, SolicitudDeCambioFields);
        return this.solicitudDeCambioService.update(+id, body);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, ['estado']);
        return this.solicitudDeCambioService.patch(+id, body.estado);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.solicitudDeCambioService.delete(+id);
    }

    @Get('/profesional/:profesionalId')
    getByProfesional(@Param('profesionalId') profesionalId: number) {
        return this.solicitudDeCambioService.findByProfesional(profesionalId);
    }

    @Get('/paciente/:pacienteId')
    getByPaciente(@Param('pacienteId') pacienteId: number) {
        return this.solicitudDeCambioService.findByPaciente(pacienteId);
    }
}
