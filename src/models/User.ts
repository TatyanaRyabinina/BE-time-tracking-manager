import { Model, Column, ForeignKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
})
export default class User extends Model<User> {
  @Column
  public firstName: string;

  @Column
  public lastName: string;

  @Column
  public email: string;

  @Column
  public birthdayDate: Date;

  @Column
  public hireDate: Date;
}
