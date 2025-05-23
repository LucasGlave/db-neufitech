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
    propietario_id: number;

    @Column({ type: DataType.ARRAY(DataType.INTEGER), defaultValue: [] })
    programaIds: number[];

    @ForeignKey(() => Sistema)
    @Column
    sistema_id: number;

    @BelongsTo(() => Sistema)
    sistema: Sistema;
}
