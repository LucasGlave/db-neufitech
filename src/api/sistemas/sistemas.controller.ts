import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Query,
} from '@nestjs/common';
import { SistemaService } from './sistemas.service';
import { sistemaFields } from 'src/common/types/sistema.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('sistemas')
export class SistemaController {
    constructor(private readonly sistemaService: SistemaService) {}

    @Get()
    findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
        return this.sistemaService.findAll(+page, +limit);
    }

    @Get('search/name')
    searchByName(
        @Query('name') name: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.sistemaService.searchByName(name, +page, +limit);
    }

    @Get('search/version')
    searchByVersion(
        @Query('version') version: string,
        @Query('page') page = 1,
        @Query('limit') limit = 20,
    ) {
        return this.sistemaService.searchByVersion(version, +page, +limit);
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
