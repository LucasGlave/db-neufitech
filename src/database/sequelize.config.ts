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
import { ContenidoUsuario } from 'src/common/entities/contenidoUsuario.entity';
import { DispositivoDeInteraccion } from 'src/common/entities/dispositivoInteraccion.entity';
import { Propietario } from 'src/common/entities/propietario.entity';
import { SolicitudDeCambio } from 'src/common/entities/solicitudCambio.entity';
import { TipoDispositivo } from 'src/common/entities/tipoDispositivo.entity';
import { Programa } from 'src/common/entities/programa.entity';
import { PacienteProfesional } from '../common/entities/pacienteProfesional.entity';

export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'neufitech',
    models: [
        Capacitacion,
        ContenidoUsuario,
        DatosContacto,
        Dispositivo,
        DispositivoDeInteraccion,
        Propietario,
        Membresia,
        ObraSocial,
        Organizacion,
        Origen,
        Paciente,
        Profesional,
        Sistema,
        SolicitudDeCambio,
        TipoDispositivo,
        Programa,
        PacienteProfesional,
    ],
    autoLoadModels: true,
    synchronize: true,
    logging: false,
};
