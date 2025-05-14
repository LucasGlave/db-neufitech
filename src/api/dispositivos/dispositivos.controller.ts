import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DispositivoService } from './dispositivos.service';
import { dispositivoFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('dispositivos')
export class DispositivosController {
    constructor(private readonly dispositivoService: DispositivoService) { }

    @Get()
    findAll() {
        return this.dispositivoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.dispositivoService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, dispositivoFields);
        return this.dispositivoService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, dispositivoFields);
        return this.dispositivoService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.dispositivoService.delete(+id);
    }
}
