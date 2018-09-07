import { IsEmail } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class MagicLinkDto {
  @DefinitionProperty()
  @IsEmail()
  public email: string;
}