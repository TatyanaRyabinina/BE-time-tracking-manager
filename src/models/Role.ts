import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Role',
})
export class Role extends Model<Role> {
  @Column
  public roleName: string;
}
