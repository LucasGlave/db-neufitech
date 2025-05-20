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
import { MembresiaService } from './membresias.service';
import {
    membresiaCheckFields,
    membresiaFields,
    membresiaFieldsPatch,
} from 'src/common/types/membresia.types';
import {
    validateOptionalFields,
    validateRequiredFields,
} from 'src/utils/validateFields';

@Controller('membresias')
export class MembresiasController {
    constructor(private readonly membresiaService: MembresiaService) {}

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

    @Put('/update/:id')
    update(@Param('id') id: string, @Body() body) {
        validateRequiredFields(body, membresiaFields);
        return this.membresiaService.update(+id, body);
    }

    @Put('check-active')
    check(@Body() body) {
        validateRequiredFields(body, membresiaCheckFields);
        return this.membresiaService.check(body);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() body) {
        validateOptionalFields(body, membresiaFieldsPatch);
        return this.membresiaService.patch(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.membresiaService.delete(+id);
    }
}
