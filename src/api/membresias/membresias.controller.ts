import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MembresiaService } from './membresias.service';
import { membresiaFields } from 'src/common/types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('membresias')
export class MembresiasController {
    constructor(private readonly membresiaService: MembresiaService) { }

    @Get()
    findAll() {
        return this.membresiaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.membresiaService.findOne(+id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, membresiaFields);
        return this.membresiaService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, membresiaFields);
        return this.membresiaService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.membresiaService.delete(+id);
    }
}
