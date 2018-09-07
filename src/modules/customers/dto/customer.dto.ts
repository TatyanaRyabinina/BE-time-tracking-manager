import { Length } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class CustomerDto {
  @DefinitionProperty()
  @Length(0, 50)
  public customerName: string;

  @DefinitionProperty()
  @Length(0, 50)
  public contacts: string;
}