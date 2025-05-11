import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Paciente } from '../common/entities/paciente.entity';
import { Profesional } from '../common/entities/profesional.entity';
import { Organizacion } from '../common/entities/organizacion.entity';
import { Origen } from '../common/entities/origen.entity';
import { ObraSocial } from '../common/entities/obraSocial.entity';
import { Dispositivo } from '../common/entities/dispositivo.entity';
import { Capacitacion } from '../common/entities/capacitacion.entity';
import { DatosContacto } from '../common/entities/datosContacto.entity';
import { Membresia } from '../common/entities/membresia.entity';
import { Sistema } from '../common/entities/sistema.entity';
import { PacienteProfesional } from '../common/entities/pacienteProfesional.entity';
import { Credencial } from 'src/common/entities/credencial.entity';
import { ContenidoUsuario } from 'src/common/entities/contenidoUsuario.entity';
import { DispositivoDeInteraccion } from 'src/common/entities/dispositivoInteraccion.entity';
import { Dueno } from 'src/common/entities/dueno.entity';
import { SolicitudDeCambio } from 'src/common/entities/solicitudCambio.entity';
import { TipoDispositivo } from 'src/common/entities/tipoDispositivo.entity';

export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'neufitech',
    models: [
        Capacitacion,
        ContenidoUsuario,
        Credencial,
        DatosContacto,
        Dispositivo,
        DispositivoDeInteraccion,
        Dueno,
        Membresia,
        ObraSocial,
        Organizacion,
        Origen,
        Paciente,
        PacienteProfesional,
        Profesional,
        Sistema,
        SolicitudDeCambio,
        TipoDispositivo,
    ],
    autoLoadModels: true,
    synchronize: true,
};
