import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Capacitacion } from './capacitacion.entity';

@Table({ tableName: 'capacitador' })
export class Capacitador extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre: string;

    @Column
    especialidad: string;

    @HasMany(() => Capacitacion)
    capacitaciones: Capacitacion[];
}
