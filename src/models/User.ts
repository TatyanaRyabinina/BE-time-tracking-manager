import { Model, Column, ForeignKey, Table, AllowNull, Scopes, HasMany, BelongsTo } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import Department from './Department';
import Profession from './Profession';
import ProfessionalLevel from './ProfessionalLevel';
import Role from './Role';
import UserProject from './UserProject';
import UserRole, { userRoleScopes } from './UserRole';

export enum userScopes {
  withAll,
}

@Scopes({
  [userScopes.withAll]: {
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
        model: () => ProfessionalLevel,
        required: false,
      },
      {
        model: () => UserRole,
        required: true,
        include: [
          {
            model: () => Role,
            attributes: ['roleName'],
          },
        ],
      },
      {
        model: () => UserProject,
        required: false,
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
  @ForeignKey(() => ProfessionalLevel)
  @Column
  public professionalLevelId: number;

  @BelongsTo(() => ProfessionalLevel)
  public professionalLevel: ProfessionalLevel;

  @BelongsTo(() => Department)
  public department: Department;

  @BelongsTo(() => Profession)
  public profession: Profession;

  @DefinitionProperty({ arrayType: UserRole })
  @HasMany(() => UserRole)
  public roles: UserRole[];

  @DefinitionProperty({ arrayType: UserProject })
  @HasMany(() => UserProject)
  public projects: UserProject[];
}
