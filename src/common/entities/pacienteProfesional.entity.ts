import {
    Table,
    Column,
    Model,
    ForeignKey,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';
import { Profesional } from './profesional.entity';

@Table({ tableName: 'paciente_profesional' })
export class PacienteProfesional extends Model {
    @ForeignKey(() => Paciente)
    @Column
    paciente_id: number;

    @ForeignKey(() => Profesional)
    @Column
    profesional_id: number;
}
