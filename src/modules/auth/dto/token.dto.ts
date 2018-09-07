import { IsEmail, Length } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class TokenDto {
  @DefinitionProperty()
  @IsEmail()
  public email: string;

  @DefinitionProperty()
  @Length(36)
  public token: string;
}