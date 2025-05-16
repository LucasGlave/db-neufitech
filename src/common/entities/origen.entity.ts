import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';

@Table({ tableName: 'origen' })
export class Origen extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string;

    @Column
    foreign_key: number;

    @ForeignKey(() => Paciente)
    @Column
    paciente_id: number; // Add the foreign key column

    @BelongsTo(() => Paciente)
    paciente: Paciente; // Define the relationship with Paciente
}
