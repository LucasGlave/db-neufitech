import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SolicitudDeCambio } from '../../common/entities/solicitudCambio.entity';
import { SolicitudDeCambioService } from './solicitudes-cambio.service';
import { SolicitudDeCambioController } from './solicitudes-cambio.controller';
import { PacienteModule } from '../pacientes/pacientes.module';
import { ProfesionalesModule } from '../profesionales/profesionales.module';

@Module({
    imports: [
        SequelizeModule.forFeature([SolicitudDeCambio]),
        PacienteModule,
        ProfesionalesModule,
    ],
    controllers: [SolicitudDeCambioController],
    providers: [SolicitudDeCambioService],
    exports: [SolicitudDeCambioService],
})
export class SolicitudesCambioModule {}
