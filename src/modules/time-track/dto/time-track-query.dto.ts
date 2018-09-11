import { IsDateString } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class TimeTrackQueryDto {
  @DefinitionProperty()
  @IsDateString()
  public startDate: Date;

  @DefinitionProperty()
  @IsDateString()
  public endDate: Date;
}