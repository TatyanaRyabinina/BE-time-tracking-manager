import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'ProfessionalLevels',
})
export default class ProfessionalLevels extends Model<ProfessionalLevels> {
  @Column
  public professionLevelName: string;
}