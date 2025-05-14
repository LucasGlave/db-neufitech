import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SolicitudDeCambioService } from './solicitudes-cambio.service';
import { solicitudDeCambioFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('solicitudes-cambio')
export class SolicitudDeCambioController {
    constructor(private readonly solicitudDeCambioService: SolicitudDeCambioService) { }

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
        validateRequiredFields(body, solicitudDeCambioFields);
        return this.solicitudDeCambioService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, solicitudDeCambioFields);
        return this.solicitudDeCambioService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.solicitudDeCambioService.delete(+id);
    }
}
