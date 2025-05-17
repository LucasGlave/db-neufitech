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
import { ContenidoUsuarioService } from './contenido-usuario.service';
import { contenidoUsuarioFields } from 'src/common/types/contenidoUsuario.types';
import { validateRequiredFields } from 'src/utils/validateFields';

@Controller('contenido-usuario')
export class ContenidoUsuarioController {
    constructor(
        private readonly contenidoUsuarioService: ContenidoUsuarioService,
    ) {}

    @Get()
    findAll() {
        return this.contenidoUsuarioService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.contenidoUsuarioService.findOne(id);
    }

    @Get('propietario/:id')
    async findByUser(@Param('id') id: number) {
        return this.contenidoUsuarioService.findByUser(id);
    }

    @Get('propietario/:id/:tipo')
    async findByUserAndType(
        @Param('id') id: number,
        @Param('tipo') tipo: string,
    ) {
        return this.contenidoUsuarioService.findByUserAndType(id, tipo);
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.contenidoUsuarioService.delete(id);
    }
}
