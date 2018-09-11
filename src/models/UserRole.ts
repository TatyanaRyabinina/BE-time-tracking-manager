import { Model, Column, Table, ForeignKey, BelongsTo, Scopes } from 'sequelize-typescript';
import { DefinitionProperty } from '../swagger';
import Role from './Role';
import User from './User';

export enum userRoleScopes {
  withRole,
}

@Scopes({
  [userRoleScopes.withRole]: {
    include: [
      {
        model: () => Role,
        attributes: ['roleName'],
        separate: true,
      } as any,
    ],
  },
})

@Table({
  tableName: 'UsersRoles',
})

export default class UserRole extends Model<UserRole> {
  @DefinitionProperty()
  @ForeignKey(() => User)
  @Column
  public userId: string;

  @DefinitionProperty()
  @ForeignKey(() => Role)
  @Column
  public roleId: number;

  @BelongsTo(() => Role)
  public role: Role;
}