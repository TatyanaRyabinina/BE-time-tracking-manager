import { Model, Column, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'Roles',
})

export default class Role extends Model<Role> {
  @DefinitionProperty()
  @Column
  public roleName: string;
}
