import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Professions',
})
export default class Profession extends Model<Profession> {
  @Column
  public professionName: string;
}
