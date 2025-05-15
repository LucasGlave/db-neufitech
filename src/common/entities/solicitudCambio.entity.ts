import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Profesional } from './profesional.entity';
import { Paciente } from './paciente.entity';

@Table({ tableName: 'solicitud_cambio' })
export class SolicitudDeCambio extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Profesional)
    @Column
    profesional_id: number;

    @ForeignKey(() => Paciente)
    @Column
    paciente_id: number;

    @Column
    tipo: string; // ruta, rutina, nota

    @Column
    metodo: string; // agregar, eliminar, modificar

    @Column
    contenido: string;

    @Column({ defaultValue: 'pendiente' }) // pendiente, aceptado, rechazado
    estado: string;

    @BelongsTo(() => Paciente)
    paciente: Paciente;

    @BelongsTo(() => Profesional)
    profesional: Profesional;
}
