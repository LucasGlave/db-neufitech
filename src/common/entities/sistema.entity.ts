import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Membresia } from './membresia.entity';

@Table({ tableName: 'sistema' })
export class Sistema extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    declare version: string;

    @Column
    nombre: string;

    @HasMany(() => Membresia)
    membresias: Membresia;
}
