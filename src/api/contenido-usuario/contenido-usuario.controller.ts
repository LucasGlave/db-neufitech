import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContenidoUsuarioService } from './contenido-usuario.service';
import { contenidoUsuarioFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('contenido-usuario')
export class ContenidoUsuarioController {
    constructor(private readonly contenidoUsuarioService: ContenidoUsuarioService) { }

    @Get()
    findAll() {
        return this.contenidoUsuarioService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.contenidoUsuarioService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.contenidoUsuarioService.delete(+id);
    }
}
