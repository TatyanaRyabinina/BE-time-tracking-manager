import { IsNumberString } from 'class-validator';

export class CustomerIdDto {
  @IsNumberString()
  public customerId: number;
}