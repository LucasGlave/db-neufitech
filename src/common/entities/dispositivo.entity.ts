import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Paciente } from './paciente.entity';

@Table({ tableName: 'dispositivo' })
export class Dispositivo extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    dispositivo: string;

    @Column
    modelo: string;

    @ForeignKey(() => Paciente)
    @Column
    dueno_id: number;

    @BelongsTo(() => Paciente)
    dueno: Paciente;
}
