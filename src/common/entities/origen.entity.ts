import {
    Table,
    Column,
    Model,
} from 'sequelize-typescript';

@Table({ tableName: 'origen' })
export class Origen extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    tipo: string;

    @Column
    foreign_key: number;
}
