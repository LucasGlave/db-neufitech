import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Propietario } from './propietario.entity';
import { TipoDispositivo } from './tipoDispositivo.entity';

@Table({ tableName: 'dispositivo_interaccion' })
export class DispositivoDeInteraccion extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => TipoDispositivo)
    @Column
    tipo_de_dispositivo_id: number;

    @Column
    numero_serie: string;

    @ForeignKey(() => Propietario)
    @Column
    propietario_id: number;

    @BelongsTo(() => TipoDispositivo)
    tipoDispositivo: TipoDispositivo;

    @BelongsTo(() => Propietario)
    propietario: Propietario;
}
