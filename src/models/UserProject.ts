import { Model, Column, Table, ForeignKey, BelongsTo, Scopes } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import Project from './Project';
import User from './User';

@Table({
  tableName: 'UsersProjects',
})

export default class UserProject extends Model<UserProject> {
  @DefinitionProperty()
  @ForeignKey(() => User)
  @Column
  public userId: string;

  @DefinitionProperty()
  @ForeignKey(() => Project)
  @Column
  public projectId: number;

  @BelongsTo(() => Project)
  public project: Project;
}