import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Capacitado } from './capacitado.entity';

@Table({ tableName: 'capacitacion' })
export class Capacitacion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    capacitadora: string;

    @Column(DataType.DATE)
    fecha: Date;

    @Column(DataType.BOOLEAN)
    virtual: boolean;

    @Column(DataType.TEXT)
    nota: string;

    @ForeignKey(() => Capacitado)
    @Column
    capacitado_id: number;

    @BelongsTo(() => Capacitado)
    capacitado: Capacitado;
}
