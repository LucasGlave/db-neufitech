import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Capacitador } from './capacitador.entity';

@Table({ tableName: 'capacitacion' })
export class Capacitacion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Capacitador)
    @Column
    capacitador_id: number;

    @BelongsTo(() => Capacitador)
    capacitador: Capacitador;

    @Column(DataType.DATE)
    fecha: Date;

    @Column(DataType.BOOLEAN)
    virtual: boolean;

    @Column(DataType.TEXT)
    nota: string;

    @Column
    capacitado_id: number;

    @Column
    tipo: string;
}
