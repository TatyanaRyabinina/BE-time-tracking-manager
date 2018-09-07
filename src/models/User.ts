import { Model, Column, ForeignKey, Table, AllowNull, Scopes, HasMany } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import Department from './Department';
import Profession from './Profession';
import ProfessionalLevels from './ProfessionalLevel';
import UserRole from './UserRole';

@Scopes({
  withAll: {
    include: [
      {
        model: () => Department,
        required: false,
      },
      {
        model: () => Profession,
        required: false,
      },
      {
        model: () => ProfessionalLevels,
        required: false,
      },
      {
        model: () => UserRole,
        required: true,
      },
    ],
  },
})
@Table({
  tableName: 'Users',
})
export default class User extends Model<User> {

  @DefinitionProperty()
  @Column
  public firstName: string;

  @DefinitionProperty()
  @Column
  public lastName: string;

  @DefinitionProperty()
  @Column
  public email: string;

  @DefinitionProperty()
  @Column
  public birthdayDate: Date;

  @DefinitionProperty()
  @Column
  public hireDate: Date;

  @DefinitionProperty()
  @Column
  public phoneNumber: string;

  @DefinitionProperty()
  @Column
  public telegram: string;

  @DefinitionProperty()
  @Column
  public skype: string;

  @DefinitionProperty()
  @Column
  public slack: string;

  @DefinitionProperty()
  @Column
  public avatar: string;

  @DefinitionProperty()
  @AllowNull
  @ForeignKey(() => Department)
  @Column
  public departmentId: number;

  @DefinitionProperty()
  @AllowNull
  @ForeignKey(() => Profession)
  @Column
  public professionId: number;

  @DefinitionProperty()
  @AllowNull
  @ForeignKey(() => ProfessionalLevels)
  @Column
  public professionalLevelId: number;

  @DefinitionProperty()
  @HasMany(() => UserRole)
  public roles: UserRole[];
}
