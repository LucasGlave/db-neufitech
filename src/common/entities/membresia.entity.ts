import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
} from 'sequelize-typescript';
import { Propietario } from './propietario.entity';
import { Sistema } from './sistema.entity';

@Table({ tableName: 'membresia' })
export class Membresia extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ defaultValue: false })
    verificado: boolean;

    @ForeignKey(() => Propietario)
    @Column
    id_propietario: number;

    @Column({ type: DataType.ARRAY(DataType.INTEGER), defaultValue: [] })
    programaIds: number[];

    @ForeignKey(() => Sistema)
    @Column
    id_sistema: number;

    @BelongsTo(() => Sistema)
    sistema: Sistema;
}
