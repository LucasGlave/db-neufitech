import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DatosContactoService } from './datos-contacto.service';
import { datosContactoFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('datos-contacto')
export class DatosContactoController {
    constructor(private readonly datosContactoService: DatosContactoService) { }

    @Get()
    findAll() {
        return this.datosContactoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.datosContactoService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, datosContactoFields);
        return this.datosContactoService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, datosContactoFields);
        return this.datosContactoService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.datosContactoService.delete(+id);
    }
}
