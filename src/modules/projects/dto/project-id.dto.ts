import { IsNumberString } from 'class-validator';

export class ProjectIdDto {
  @IsNumberString()
  public id: number;
}