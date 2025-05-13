import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacienteService } from './pacientes.service';
import { pacienteFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('pacientes')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) { }

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
}
