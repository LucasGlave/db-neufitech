import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Dueno } from './dueno.entity';
import { TipoDispositivo } from './tipoDispositivo.entity';

@Table({ tableName: 'dispositivo_interaccion' })
export class DispositivoDeInteraccion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => TipoDispositivo)
    @Column
    tipo_de_dispositivo_id: number;

    @BelongsTo(() => TipoDispositivo)
    tipoDispositivo: TipoDispositivo;

    @Column
    numero_serie: string;

    @ForeignKey(() => Dueno)
    @Column
    duenio_id: number;

    @BelongsTo(() => Dueno)
    duenio: Dueno;
}
