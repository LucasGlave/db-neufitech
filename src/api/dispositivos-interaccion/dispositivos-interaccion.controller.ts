import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DispositivoInteraccionService } from './dispositivos-interaccion.service';
import { dispositivoDeInteraccionFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('dispositivoDeInteraccions')
export class DispositivosInteraccionController {
    constructor(private readonly dispositivoDeInteraccionService: DispositivoInteraccionService) { }

    @Get()
    findAll() {
        return this.dispositivoDeInteraccionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.dispositivoDeInteraccionService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, dispositivoDeInteraccionFields);
        return this.dispositivoDeInteraccionService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, dispositivoDeInteraccionFields);
        return this.dispositivoDeInteraccionService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.dispositivoDeInteraccionService.delete(+id);
    }
}
