import {
    Table,
    Column,
    Model,
    DataType,
    HasMany,
    HasOne,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
} from 'sequelize-typescript';
import { DatosContacto } from './datosContacto.entity';
import { ObraSocial } from './obraSocial.entity';
import { Origen } from './origen.entity';
import { Dispositivo } from './dispositivo.entity';
import { Membresia } from './membresia.entity';
import { Credencial } from './credencial.entity';
import { Profesional } from './profesional.entity';
import { PacienteProfesional } from './pacienteProfesional.entity';
import { SolicitudDeCambio } from './solicitudCambio.entity';

@Table({ tableName: 'paciente' })
export class Paciente extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre_completo: string;

    @Column
    pais: string;

    @Column
    provincia: string;

    @Column
    ciudad: string;

    @Column
    direccion: string;

    @Column(DataType.DATE)
    fecha_nacimiento: Date;

    @Column
    diagnostico: string;

    @ForeignKey(() => Origen)
    @Column
    origen_id: number;

    @BelongsTo(() => Origen)
    origen: Origen;

    @ForeignKey(() => ObraSocial)
    @Column
    obra_social: number;

    @BelongsTo(() => ObraSocial)
    obraSocial: ObraSocial;

    @HasMany(() => DatosContacto)
    datosContacto: DatosContacto[];

    @HasMany(() => Dispositivo)
    dispositivos: Dispositivo[];

    @HasOne(() => Membresia)
    membresia: Membresia;

    @HasOne(() => Credencial)
    credencial: Credencial;

    @BelongsToMany(() => Profesional, () => PacienteProfesional)
    profesionales: Profesional[];

    @HasMany(() => SolicitudDeCambio)
    solicitudesDeCambio: SolicitudDeCambio[];
}
