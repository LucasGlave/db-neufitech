import {
    Table,
    Column,
    Model,
    HasMany,
} from 'sequelize-typescript';
import { DispositivoDeInteraccion } from './dispositivoInteraccion.entity';

@Table({ tableName: 'tipo_dispositivo' })
export class TipoDispositivo extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string;

    @HasMany(() => DispositivoDeInteraccion)
    dispositivosInteraccion: DispositivoDeInteraccion;
}
