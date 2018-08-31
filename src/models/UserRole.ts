import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Role } from './Role';
import User from './User';

@Table({
  tableName: 'UsersRoles',
})
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => User)
  @Column
  public userId: string;

  @ForeignKey(() => Role)
  @Column
  public roleId: number;
}