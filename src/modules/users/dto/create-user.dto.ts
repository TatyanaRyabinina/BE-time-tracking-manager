import { Length, IsEmail } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class CreateUserDto {
  @DefinitionProperty()
  @Length(0, 50)
  public firstName: string;

  @DefinitionProperty()
  @Length(0, 50)
  public lastName: string;

  @DefinitionProperty()
  @IsEmail()
  public email: string;
}