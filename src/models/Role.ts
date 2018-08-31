import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Role',
})
export default class Role extends Model<Role> {
  @Column
  public roleName: string;
}
