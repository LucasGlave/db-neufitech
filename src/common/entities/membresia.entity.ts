import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';
import { Sistema } from './sistema.entity';

@Table({ tableName: 'membresia' })
export class Membresia extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Paciente)
    @Column
    id_paciente: number;

    @BelongsTo(() => Paciente)
    paciente: Paciente;

    @ForeignKey(() => Sistema)
    @Column
    id_sistema: number;

    @BelongsTo(() => Sistema)
    sistema: Sistema;

    @Column
    paquete: string;
}
