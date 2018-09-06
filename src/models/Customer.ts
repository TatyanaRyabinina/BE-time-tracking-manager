import { Model, Column, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'Customers',
})
export default class Customer extends Model<Customer> {
  @DefinitionProperty()
  @Column
  public customerName: string;

  @DefinitionProperty()
  @Column
  public contacts: string;
}