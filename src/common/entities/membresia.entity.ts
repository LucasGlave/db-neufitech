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

    @Column
    verificado: boolean;

    @ForeignKey(() => Paciente)
    @Column
    id_paciente: number;

    @ForeignKey(() => Programa)
    @Column(DataType.ARRAY(DataType.INTEGER))
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
