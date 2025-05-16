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
import {
    contenidoUsuarioFields,
    updateContenidoUsuarioFields,
} from 'src/common/types';
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

    @Get('propietario/:id/tipo-propietario/:tipo_propietario')
    async findByUser(
        @Param('id') id: number,
        @Param('tipo_propietario') tipo_propietario: string,
    ) {
        return this.contenidoUsuarioService.findByUser(id, tipo_propietario);
    }

    @Get('propietario/:id/tipo-propietario/:tipo_propietario/contenido/:tipo')
    async findByUserAndType(
        @Param('id') id: number,
        @Param('tipo') tipo: string,
        @Param('tipo_propietario') tipo_propietario: string,
    ) {
        return this.contenidoUsuarioService.findByUserAndType(
            id,
            tipo_propietario,
            tipo,
        );
    }

    @Post()
    create(@Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.create(body);
    }

    @Put()
    update(@Body() body) {
        validateRequiredFields(body, contenidoUsuarioFields);
        return this.contenidoUsuarioService.update(body);
    }

    @Delete()
    delete(@Body() body) {
        return this.contenidoUsuarioService.delete(body);
    }
}
