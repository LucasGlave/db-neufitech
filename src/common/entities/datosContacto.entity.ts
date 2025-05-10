import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';

@Table({ tableName: 'datos_contacto' })
export class DatosContacto extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre_completo: string;

    @Column
    direccion: string;

    @Column
    provincia: string;

    @Column
    ciudad: string;

    @Column
    relacion: string;

    @Column(DataType.BIGINT)
    celular: number;

    @Column
    email: string;

    @ForeignKey(() => Paciente)
    @Column
    paciente_id: number;

    @BelongsTo(() => Paciente)
    paciente: Paciente;
}
