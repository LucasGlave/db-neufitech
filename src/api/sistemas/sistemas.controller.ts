import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SistemaService } from './sistemas.service';
import { sistemaFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('sistemas')
export class SistemaController {
    constructor(private readonly sistemaService: SistemaService) { }

    @Get()
    findAll() {
        return this.sistemaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.sistemaService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, sistemaFields);
        return this.sistemaService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, sistemaFields);
        return this.sistemaService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.sistemaService.delete(+id);
    }
}
