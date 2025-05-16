import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Propietario } from './propietario.entity';

@Table({ tableName: 'contenido_usuario' })
export class ContenidoUsuario extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Propietario)
    @Column
    propietario_id: number;

    @Column
    tipo: string;

    @Column(DataType.TEXT)
    contenido: string;

    @BelongsTo(() => Propietario)
    propietario: Propietario;
}
