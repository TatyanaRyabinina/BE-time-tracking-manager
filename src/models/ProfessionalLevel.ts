import { Model, Column, Table } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';

@Table({
  tableName: 'ProfessionalLevels',
})
export default class ProfessionalLevels extends Model<ProfessionalLevels> {
  @DefinitionProperty()
  @Column
  public professionLevelName: string;
}