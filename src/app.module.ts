import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './api/pacientes/pacientes.module';
import { ProfesionalesModule } from './api/profesionales/profesionales.module';
import { OrganizacionesModule } from './api/organizaciones/organizaciones.module';
import { OrigenesModule } from './api/origenes/origenes.module';
import { ObrasSocialesModule } from './api/obras-sociales/obras-sociales.module';
import { DispositivosModule } from './api/dispositivos/dispositivos.module';
import { DatosContactoModule } from './api/datos-contacto/datos-contacto.module';
import { MembresiasModule } from './api/membresias/membresias.module';
import { SistemasModule } from './api/sistemas/sistemas.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './database/sequelize.config';
import { CapacitacionesModule } from './api/capacitaciones/capacitaciones.module';
import { ContenidoUsuarioModule } from './api/contenido-usuario/contenido-usuario.module';
import { DispositivosInteraccionModule } from './api/dispositivos-interaccion/dispositivos-interaccion.module';
import { SolicitudesCambioModule } from './api/solicitudes-cambio/solicitudes-cambio.module';
import { TiposDispositivosModule } from './api/tipos-dispositivos/tipos-dispositivos.module';
import { ObraSocial } from './common/entities/obraSocial.entity';
import { SeederService } from './database/seeder.service';
import { ProgramasModule } from './api/programas/programas.module';

@Module({
    imports: [
        PacienteModule,
        ProfesionalesModule,
        OrganizacionesModule,
        OrigenesModule,
        ObrasSocialesModule,
        DispositivosModule,
        DatosContactoModule,
        MembresiasModule,
        SistemasModule,
        CapacitacionesModule,
        ContenidoUsuarioModule,
        DispositivosInteraccionModule,
        SolicitudesCambioModule,
        TiposDispositivosModule,
        ProgramasModule,
        SequelizeModule.forRoot(sequelizeConfig),
        SequelizeModule.forFeature([ObraSocial]),
    ],
    controllers: [AppController],
    providers: [AppService, SeederService],
})
export class AppModule {}
