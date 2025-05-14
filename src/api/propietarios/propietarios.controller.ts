import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PropietarioService } from './propietarios.service';
import { propietarioFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('propietarios')
export class PropietarioController {
    constructor(private readonly propietarioService: PropietarioService) { }

    @Get()
    findAll() {
        return this.propietarioService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.propietarioService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, propietarioFields);
        return this.propietarioService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, propietarioFields);
        return this.propietarioService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.propietarioService.delete(+id);
    }
}
