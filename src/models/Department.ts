import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Departments',
})
export class Department extends Model<Department> {
  @Column
  public departmentName: string;
}