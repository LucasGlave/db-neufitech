import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './pacientes/pacientes.module';
import { ProfesionalesModule } from './profesionales/profesionales.module';
import { OrganizacionesModule } from './organizaciones/organizaciones.module';
import { OrigenesModule } from './origenes/origenes.module';
import { ObrasSocialesModule } from './obras-sociales/obras-sociales.module';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { DatosContactoModule } from './datos-contacto/datos-contacto.module';
import { MembresiasModule } from './membresias/membresias.module';
import { SistemasModule } from './sistemas/sistemas.module';
import { TablaPacienteProfesionalModule } from './pacientes-profesionales/pacientes-profesionales.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './database/sequelize.config';
import { CredencialModule } from './credenciales/credenciales.module';
import { CapacitacionesModule } from './capacitaciones/capacitaciones.module';
import { MarcasTrackerModule } from './marcas-tracker/marcas-tracker.module';
import { CapacitadosModule } from './capacitados/capacitados.module';
import { ContenidoUsuarioModule } from './contenido-usuario/contenido-usuario.module';
import { DispositivosInteraccionModule } from './dispositivos-interaccion/dispositivos-interaccion.module';
import { DuenoModule } from './duenos/duenos.module';
import { SolicitudesCambioModule } from './solicitudes-cambio/solicitudes-cambio.module';
import { TiposDispositivosModule } from './tipos-dispositivos/tipos-dispositivos.module';

@Module({
  imports: [PacienteModule, ProfesionalesModule, OrganizacionesModule, OrigenesModule, ObrasSocialesModule, DispositivosModule, DatosContactoModule, MembresiasModule, SistemasModule, TablaPacienteProfesionalModule, SequelizeModule.forRoot(sequelizeConfig), CredencialModule, CapacitacionesModule, MarcasTrackerModule, CapacitadosModule, ContenidoUsuarioModule, DispositivosInteraccionModule, DuenoModule, SolicitudesCambioModule, TiposDispositivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
