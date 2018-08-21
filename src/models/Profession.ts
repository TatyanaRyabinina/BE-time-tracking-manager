import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';

@Table
export class Profession extends Model<Profession> {
  @Column
  professionName: string;
}
