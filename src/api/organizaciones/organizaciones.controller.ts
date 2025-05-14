import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrganizacionService } from './organizaciones.service';
import { organizacionFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('organizaciones')
export class OrganizacionesController {
    constructor(private readonly organizacionService: OrganizacionService) { }

    @Get()
    findAll() {
        return this.organizacionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.organizacionService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, organizacionFields);
        return this.organizacionService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, organizacionFields);
        return this.organizacionService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.organizacionService.delete(+id);
    }
}
