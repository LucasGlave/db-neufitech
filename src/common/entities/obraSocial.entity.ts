import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Paciente } from './paciente.entity';

@Table({ tableName: 'obra_social' })
export class ObraSocial extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    nombre: string;

    @HasMany(() => Paciente)
    pacientes: Paciente[];
}
