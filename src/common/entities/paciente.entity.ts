import {
    Table,
    Column,
    Model,
    DataType,
    HasMany,
    HasOne,
    BelongsTo,
    BelongsToMany,
    ForeignKey,
} from 'sequelize-typescript';
import { DatosContacto } from './datosContacto.entity';
import { ObraSocial } from './obraSocial.entity';
import { Origen } from './origen.entity';
import { Membresia } from './membresia.entity';
import { Profesional } from './profesional.entity';
import { SolicitudDeCambio } from './solicitudCambio.entity';
import { PacienteProfesional } from './pacienteProfesional.entity';
import { Propietario } from './propietario.entity';

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

    @Column
    documento: number;

    @Column(DataType.DATE)
    fecha_nacimiento: Date;

    @Column
    diagnostico: string;

    @ForeignKey(() => Origen)
    @Column
    origen_id: number;

    @ForeignKey(() => ObraSocial)
    @Column
    obra_social_id: number;

    @ForeignKey(() => Propietario)
    @Column
    propietario_id: number;

    @BelongsTo(() => Origen)
    origen: Origen;

    @BelongsTo(() => ObraSocial)
    obraSocial: ObraSocial;

    @HasMany(() => DatosContacto)
    datosContacto: DatosContacto[];

    @HasOne(() => Membresia)
    membresia: Membresia;

    @BelongsToMany(() => Profesional, () => PacienteProfesional)
    profesionales: Profesional[];

    @HasMany(() => SolicitudDeCambio)
    solicitudesDeCambio: SolicitudDeCambio[];
}
