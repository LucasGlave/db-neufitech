import {
    Table,
    Column,
    Model,
    BelongsTo,
    ForeignKey,
} from 'sequelize-typescript';
import { Membresia } from './membresia.entity';

@Table({ tableName: 'programa' })
export class Programa extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre: string;

    @ForeignKey(() => Membresia)
    @Column
    membresia_id: number;

    @BelongsTo(() => Membresia)
    membresia: Membresia;
}
