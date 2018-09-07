import { BasicResponse } from '../../../core/responses/basic.response';
import User from '../../../models/User';
import { DefinitionProperty } from '../../../swagger';

export class TokenResponse {
  @DefinitionProperty()
  public token: string;

  @DefinitionProperty()
  public user: User;
}