import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { OrigenService } from './origenes.service';
import { origenFields } from 'src/common/types/origen.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('origenes')
export class OrigenesController {
    constructor(private readonly origenService: OrigenService) {}

    @Get()
    findAll() {
        return this.origenService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.origenService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, origenFields);
        return this.origenService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, origenFields);
        return this.origenService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.origenService.delete(+id);
    }
}
