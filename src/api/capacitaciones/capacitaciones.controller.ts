import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { CapacitacionService } from './capacitaciones.service';
import { capacitacionFields } from 'src/common/types/capacitacion.types'; // Updated path
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('capacitaciones')
export class CapacitacionController {
    constructor(private readonly capacitacionService: CapacitacionService) {}

    @Get()
    findAll() {
        return this.capacitacionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.capacitacionService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, capacitacionFields);
        return this.capacitacionService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, capacitacionFields);
        return this.capacitacionService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.capacitacionService.delete(+id);
    }
}
