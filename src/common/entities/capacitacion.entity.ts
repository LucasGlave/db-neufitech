import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'capacitacion' })
export class Capacitacion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    capacitador: string;

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
