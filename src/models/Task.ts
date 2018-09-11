import { Model, Column, ForeignKey, Table, AllowNull, Scopes } from 'sequelize-typescript';
import Project from './Project';

@Scopes({
  withAll: {
    include: [
      {
        model: () => Project,
        required: true,
      },
    ],
  },
})

@Table({
  tableName: 'Tasks',
})

export default class Task extends Model<Task> {
  @Column
  public taskName: string;

  @Column
  public estimate: string;

  @Column
  public deadline: Date;

  @AllowNull
  @ForeignKey(() => Project)
  @Column
  public projectId: number;
}