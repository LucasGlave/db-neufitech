import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organizacion } from '../../common/entities/organizacion.entity';
import { OrganizacionService } from './organizaciones.service';

@Module({
  imports: [SequelizeModule.forFeature([Organizacion])],
  providers: [OrganizacionService],
  exports: [OrganizacionService],
})
export class OrganizacionesModule { }
