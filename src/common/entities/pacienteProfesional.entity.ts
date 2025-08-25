import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
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

    @BelongsTo(() => Paciente, 'paciente_id')
    paciente: Paciente;

    @BelongsTo(() => Profesional, 'profesional_id')
    profesional: Profesional;
}
