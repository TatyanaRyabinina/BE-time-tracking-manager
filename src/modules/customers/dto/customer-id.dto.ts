import { IsNumber } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class CustomerIdDto {
  @DefinitionProperty()
  @IsNumber()
  public id: number;
}