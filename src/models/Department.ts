import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Departments',
})
export default class Department extends Model<Department> {
  @Column
  public departmentName: string;
}