import { IsNumber } from 'class-validator';

export class ProjectIdDto {
  @IsNumber()
  public id: number;
}