import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProgramaService } from './programas.service';
import { programaFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('programas.service')
export class ProgramaController {
    constructor(private readonly programaService: ProgramaService) { }

    @Get()
    findAll() {
        return this.programaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.programaService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, programaFields);
        return this.programaService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, programaFields);
        return this.programaService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.programaService.delete(+id);
    }
}
