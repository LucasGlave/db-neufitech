import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
    HasMany,
} from 'sequelize-typescript';
import { Organizacion } from './organizacion.entity';
import { Paciente } from './paciente.entity';
import { SolicitudDeCambio } from './solicitudCambio.entity';
import { PacienteProfesional } from './pacienteProfesional.entity';
import { Propietario } from './propietario.entity';

@Table({ tableName: 'profesional' })
export class Profesional extends Model {
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
    especialización: string;

    @Column
    documento: number;

    @Column
    email: string;

    @Column
    celular: string;

    @ForeignKey(() => Organizacion)
    @Column
    organizacion_id: number;

    @ForeignKey(() => Propietario)
    @Column
    propietario_id: number;

    @BelongsTo(() => Organizacion)
    organizacion: Organizacion;

    @BelongsToMany(() => Paciente, () => PacienteProfesional)
    pacientes: Paciente[];

    @HasMany(() => SolicitudDeCambio)
    solicitudesDeCambio: SolicitudDeCambio[];
}
