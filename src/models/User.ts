import { Model, Column, ForeignKey, Table, AllowNull, Scopes, HasMany } from 'sequelize-typescript';
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
  @Column
  public firstName: string;

  @Column
  public lastName: string;

  @Column
  public email: string;

  @Column
  public birthdayDate: Date;

  @Column
  public hireDate: Date;

  @Column
  public phoneNumber: string;

  @Column
  public telegram: string;

  @Column
  public skype: string;

  @Column
  public slack: string;

  @AllowNull
  @ForeignKey(() => Department)
  @Column
  public departmentId: number;

  @AllowNull
  @ForeignKey(() => Profession)
  @Column
  public professionId: number;

  @AllowNull
  @ForeignKey(() => ProfessionalLevels)
  @Column
  public professionLevelId: number;

  @HasMany(() => UserRole)
  public roles: UserRole[];
}
