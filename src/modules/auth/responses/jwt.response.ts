import { BasicResponse } from '../../../core/responses/basic.response';
import { DefinitionProperty } from '../../../swagger';
import { TokenResponse } from './token.response';

export class JwtResponse extends BasicResponse<TokenResponse> {
  @DefinitionProperty()
  public data: TokenResponse;
}