import { BasicResponse } from '../../../core/responses/basic.response';
import User from '../../../models/User';
import { DefinitionProperty } from '../../../swagger';

export class UserResponse extends BasicResponse<User> {
  @DefinitionProperty()
  public data: User;
}