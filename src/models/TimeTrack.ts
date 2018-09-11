import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import User from './User';

@Table({
  timestamps: true,
  tableName: 'TimeTracks',
})
export default class TimeTrack extends Model<TimeTrack> {
  @DefinitionProperty()
  @Column
  public time: number;

  @DefinitionProperty()
  @ForeignKey(() => User)
  @Column
  public userId: number;

  @DefinitionProperty()
  @Column
  public taskId: number;

  @DefinitionProperty()
  @Column
  public trackDate: Date;
}