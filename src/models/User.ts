import { Model, Column, ForeignKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
})
export default class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  birthdayDate: Date;

  @Column
  hireDate: Date;
}
