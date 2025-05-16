import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organizacion } from '../../common/entities/organizacion.entity';
import { OrganizacionesService } from './organizaciones.service';
import { OrganizacionesController } from './organizaciones.controller';

@Module({
    imports: [SequelizeModule.forFeature([Organizacion])],
    controllers: [OrganizacionesController],
    providers: [OrganizacionesService],
    exports: [OrganizacionesService],
})
export class OrganizacionesModule {}
