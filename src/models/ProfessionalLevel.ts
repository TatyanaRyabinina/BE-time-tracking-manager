import { Model, Column, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'ProfessionalLevels',
})
export default class ProfessionalLevel extends Model<ProfessionalLevel> {
  @DefinitionProperty()
  @Column
  public professionalLevelName: string;
}