import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Professions',
})
export class Profession extends Model<Profession> {
  @Column
  public professionName: string;
}
