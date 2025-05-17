import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
} from '@nestjs/common';
import { OrganizacionesService } from './organizaciones.service';
import { organizacionFields } from 'src/common/types/organizacion.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('organizaciones')
export class OrganizacionesController {
    constructor(private readonly organizacionService: OrganizacionesService) {}

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

    @Patch(':id')
    patch(@Param('id') id: string, @Body() body) {
        return this.organizacionService.patch(+id, body);
    }
}
