import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Dispositivo } from './dispositivo.entity';

@Table({ tableName: 'marca_tracker' })
export class MarcaTracker extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre: string;

    @HasMany(() => Dispositivo)
    dispositivos: Dispositivo[];
}
