import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { CapacitadorService } from './capacitadores.service';
import { validateRequiredFields } from 'src/utils/validateFields';
import { capacitadorFields } from 'src/common/types/capacitador.types';

@Controller('capacitadores')
export class CapacitadorController {
    constructor(private readonly capacitadorService: CapacitadorService) {}

    @Get()
    findAll() {
        return this.capacitadorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.capacitadorService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        validateRequiredFields(body, capacitadorFields);
        return this.capacitadorService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        validateRequiredFields(body, capacitadorFields);
        return this.capacitadorService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.capacitadorService.delete(id);
    }
}
