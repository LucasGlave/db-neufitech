import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TipoDispositivoService } from './tipos-dispositivos.service';
import { tipoDispositivoFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('tiposDispositivos')
export class TipoDispositivoController {
    constructor(private readonly tipoDispositivoService: TipoDispositivoService) { }

    @Get()
    findAll() {
        return this.tipoDispositivoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.tipoDispositivoService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, tipoDispositivoFields);
        return this.tipoDispositivoService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, tipoDispositivoFields);
        return this.tipoDispositivoService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.tipoDispositivoService.delete(+id);
    }
}
