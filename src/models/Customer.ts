import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Customers',
})
export default class Customer extends Model<Customer> {
  @Column
  public customerName: string;

  @Column
  public contacts: string;
}