import { Table, Column, Model, HasMany, HasOne } from 'sequelize-typescript';
import { DispositivoDeInteraccion } from './dispositivoInteraccion.entity';
import { ContenidoUsuario } from './contenidoUsuario.entity';
import { Dispositivo } from './dispositivo.entity';
import { Membresia } from './membresia.entity';

@Table({ tableName: 'propietario' })
export class Propietario extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string; // 'paciente' | 'profesional' | 'organizacion'

    @Column
    foreign_key: number;

    @HasMany(() => DispositivoDeInteraccion)
    dispositivosInteraccion: DispositivoDeInteraccion;

    @HasMany(() => Dispositivo)
    dispositivos: Dispositivo[];

    @HasMany(() => ContenidoUsuario)
    contenidos: ContenidoUsuario;

    @HasOne(() => Membresia)
    membresia: Membresia;
}
