import { Model, Column, ForeignKey, Table, AllowNull, Scopes } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
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
  @DefinitionProperty()
  @Column
  public projectName: string;

  @DefinitionProperty()
  @Column
  public description: string;

  @DefinitionProperty()
  @AllowNull
  @ForeignKey(() => Customer)
  @Column
  public customerId: number;
}