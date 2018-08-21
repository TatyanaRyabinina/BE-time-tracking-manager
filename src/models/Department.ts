import { Model, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';

@Table
export class Department extends Model<Department> {
  @Column
  departmentName: string;
}