import {
    Table,
    Column,
    Model,
    HasMany,
} from 'sequelize-typescript';
import { Capacitacion } from './capacitacion.entity';

@Table({ tableName: 'capacitado' })
export class Capacitado extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string;

    @Column
    foreign_key: number;

    @HasMany(() => Capacitacion)
    capacitaciones: Capacitacion[];
}
