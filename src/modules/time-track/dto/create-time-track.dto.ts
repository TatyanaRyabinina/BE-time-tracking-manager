import { IsNumber, IsDate } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class CreateTimeTrack {
  @DefinitionProperty()
  @IsDate()
  public time: number;

  @DefinitionProperty()
  @IsDate()
  public trackDate: Date;

  @DefinitionProperty()
  @IsNumber()
  public taskId: number;
}