import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import Role from './Role';
import User from './User';

@Table({
  tableName: 'UsersRoles',
})
export default class UserRole extends Model<UserRole> {
  @DefinitionProperty()
  @ForeignKey(() => User)
  @Column
  public userId: string;

  @DefinitionProperty()
  @ForeignKey(() => Role)
  @Column
  public roleId: number;
}