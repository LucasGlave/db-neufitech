import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
    HasMany,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';
import { Sistema } from './sistema.entity';
import { Programa } from './programa.entity';

@Table({ tableName: 'membresia' })
export class Membresia extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ defaultValue: false })
    verificado: boolean;

    @ForeignKey(() => Paciente)
    @Column
    id_paciente: number;

    @Column({ type: DataType.ARRAY(DataType.INTEGER), defaultValue: [] }) // Ensure this is defined as an array of integers
    programaIds: number[];

    @ForeignKey(() => Sistema)
    @Column
    id_sistema: number;

    @BelongsTo(() => Paciente)
    paciente: Paciente;

    @BelongsTo(() => Sistema)
    sistema: Sistema;

    @HasMany(() => Programa)
    programas: Programa[];
}
