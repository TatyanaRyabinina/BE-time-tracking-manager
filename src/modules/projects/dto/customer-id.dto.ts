import { IsNumber } from 'class-validator';

export class CustomerIdDto {
  @IsNumber()
  public customerId: number;
}