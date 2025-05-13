import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProfesionalService } from './profesionales.service';
import { profesionalFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('profesionales')
export class ProfesionalesController {
    constructor(private readonly profesionalService: ProfesionalService) { }

    @Get()
    findAll() {
        return this.profesionalService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.profesionalService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, profesionalFields);
        return this.profesionalService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, profesionalFields);
        return this.profesionalService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.profesionalService.delete(+id);
    }
}
