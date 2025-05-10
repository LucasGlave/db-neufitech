import {
    Table,
    Column,
    Model,
    HasMany,
} from 'sequelize-typescript';
import { DispositivoDeInteraccion } from './dispositivoInteraccion.entity';
import { ContenidoUsuario } from './contenidoUsuario.entity';

@Table({ tableName: 'dueno' })
export class Dueno extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string; // 'paciente' | 'profesional' | 'organizacion'

    @Column
    foreign_key: number;

    @HasMany(() => DispositivoDeInteraccion)
    dispositivosInteraccion: DispositivoDeInteraccion[];

    @HasMany(() => ContenidoUsuario)
    contenidos: ContenidoUsuario[];
}
