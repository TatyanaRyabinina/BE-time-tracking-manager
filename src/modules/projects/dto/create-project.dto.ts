import { Length, ValidateIf, IsNumber } from 'class-validator';

export class CreateProjectDto {
  @Length(0, 50)
  public projectName: string;

  @Length(0, 50)
  public description: string;
}