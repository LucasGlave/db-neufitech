import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';
import { Propietario } from './propietario.entity';

@Table({ tableName: 'dispositivo' })
export class Dispositivo extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    dispositivo: string;

    @Column
    modelo: string;

    @ForeignKey(() => Propietario)
    @Column
    propietario_id: number;

    @BelongsTo(() => Propietario)
    propietario: Propietario;
}
