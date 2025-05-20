import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'programa' })
export class Programa extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column
    declare nombre: string;
}
