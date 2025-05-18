import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { PacienteService } from './pacientes.service';
import { pacienteFields } from 'src/common/types/paciente.types';
import { validateRequiredFields } from 'src/utils/validateFields';
import { datosContactoFields } from 'src/common/types/datosContacto.types';
import { origenFields } from 'src/common/types/origen.types';

@Controller('pacientes')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @Get()
    findAll() {
        return this.pacienteService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.pacienteService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, pacienteFields);
        return this.pacienteService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, pacienteFields);
        return this.pacienteService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.pacienteService.delete(+id);
    }

    @Post(':id/asignar-profesional')
    asignarPaciente(@Param('id') id: string, @Body() body) {
        return this.pacienteService.asignarProfesional(+id, body.profesionalId);
    }

    @Get(':id/asignados')
    getPacientesAsiggns(@Param('id') id: string) {
        return this.pacienteService.getPacientesAsiggns(+id);
    }

    @Post(':id/datos-contacto')
    async addDatosContacto(@Param('id') pacienteId: number, @Body() body) {
        validateRequiredFields(body, datosContactoFields);
        return this.pacienteService.addDatosContacto(pacienteId, body);
    }

    @Put(':id/datos-contacto')
    async updateDatosContacto(@Param('id') pacienteId: number, @Body() body) {
        validateRequiredFields(body, datosContactoFields);
        return this.pacienteService.updateDatosContacto(pacienteId, body);
    }

    @Get(':id/datos-contacto')
    async getDatosContacto(@Param('id') pacienteId: number) {
        return this.pacienteService.getDatosContacto(pacienteId);
    }

    @Delete(':id/datos-contacto')
    async deleteDatosContacto(@Param('id') pacienteId: number) {
        return this.pacienteService.deleteDatosContacto(pacienteId);
    }

    @Post(':id/origen')
    async addOrigen(@Param('id') pacienteId: number, @Body() body) {
        validateRequiredFields(body, origenFields);
        return this.pacienteService.addOrigen(pacienteId, body);
    }

    @Put(':id/origen')
    async updateOrigen(@Param('id') pacienteId: number, @Body() body) {
        validateRequiredFields(body, origenFields);
        return this.pacienteService.updateOrigen(pacienteId, body);
    }

    @Get(':id/origen')
    async getOrigen(@Param('id') pacienteId: number) {
        return this.pacienteService.getOrigen(pacienteId);
    }

    @Delete(':id/origen')
    async deleteOrigen(@Param('id') pacienteId: number) {
        return this.pacienteService.deleteOrigen(pacienteId);
    }
}
