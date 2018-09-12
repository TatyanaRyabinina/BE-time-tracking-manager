import { IsNumberString } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class CustomerIdDto {
  @DefinitionProperty()
  @IsNumberString()
  public id: number;
}