import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Dueno } from './dueno.entity';

@Table({ tableName: 'contenido_usuario' })
export class ContenidoUsuario extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Dueno)
    @Column
    duenio_id: number;

    @BelongsTo(() => Dueno)
    dueno: Dueno;

    @Column
    tipo: string;

    @Column(DataType.DATE)
    ultima_edicion: Date;

    @Column(DataType.TEXT)
    contenido: string;
}
