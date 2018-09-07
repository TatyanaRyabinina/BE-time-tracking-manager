import { Model, Column, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'Professions',
})
export default class Profession extends Model<Profession> {
  @DefinitionProperty()
  @Column
  public professionName: string;
}
