import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Profesional } from './profesional.entity';

@Table({ tableName: 'organizacion' })
export class Organizacion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre: string;

    @Column
    pais: string;

    @Column
    provincia: string;

    @Column
    ciudad: string;

    @Column
    direccion: string;

    @HasMany(() => Profesional)
    profesionales: Profesional[];
}
