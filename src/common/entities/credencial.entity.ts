import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';
import { Membresia } from './membresia.entity';

@Table({ tableName: 'credencial' })
export class Credencial extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Paciente)
    @Column
    paciente_id: number;

    @BelongsTo(() => Paciente)
    paciente: Paciente;

    @Column
    email: string;

    @Column({ field: 'contraseña_encriptada' })
    contraseña: string;

    @ForeignKey(() => Membresia)
    @Column
    membresia_id: number;

    @BelongsTo(() => Membresia)
    membresia: Membresia;

    @Column(DataType.BOOLEAN)
    usado: boolean;
}
