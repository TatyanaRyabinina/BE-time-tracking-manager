import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'Departments',
})
export default class Department extends Model<Department> {
  @DefinitionProperty()
  @Column
  public departmentName: string;
}