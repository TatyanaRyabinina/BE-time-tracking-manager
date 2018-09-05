import { Model, Column, ForeignKey, Table, AllowNull, Scopes, HasMany } from 'sequelize-typescript';
import Customer from './Customer';

@Scopes({
  withAll: {
    include: [
      {
        model: () => Customer,
        required: true,
      },
    ],
  },
})

@Table({
  tableName: 'Projects',
})
export default class Project extends Model<Project> {
  @Column
  public projectName: string;

  @Column
  public description: string;

  @AllowNull
  @ForeignKey(() => Customer)
  @Column
  public customerId: number;
}