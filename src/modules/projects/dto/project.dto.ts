import { Length, ValidateIf, IsNumber } from 'class-validator';

export class ProjectDto {
  @Length(0, 50)
  public projectName: string;

  @Length(0, 50)
  public description: string;

  @ValidateIf((dto) => dto.customerId)
  @IsNumber()
  public customerId: number;
}