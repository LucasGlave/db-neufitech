import { Module } from '@nestjs/common';
import { OrganizacionesService } from './organizaciones.service';

@Module({
  providers: [OrganizacionesService]
})
export class OrganizacionesModule {}
