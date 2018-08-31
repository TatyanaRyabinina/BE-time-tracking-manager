import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'ProfessionalLevels',
})
export class ProfessionalLevels extends Model<ProfessionalLevels> {
  @Column
  public professionLevelName: string;
}