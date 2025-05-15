import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { ObraSocialService } from './obras-sociales.service';
import { obraSocialFields } from 'src/common/types/obraSocial.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('obraSocials')
export class ObrasSocialesController {
    constructor(private readonly obraSocialService: ObraSocialService) {}

    @Get()
    findAll() {
        return this.obraSocialService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.obraSocialService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, obraSocialFields);
        return this.obraSocialService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, obraSocialFields);
        return this.obraSocialService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.obraSocialService.delete(+id);
    }
}
