import { BasicResponse } from '../../../core/responses/basic.response';
import TimeTrack from '../../../models/TimeTrack';
import { DefinitionProperty } from '../../../swagger';

export class TimeTracksResponse extends BasicResponse<TimeTrack[]> {
  @DefinitionProperty({ arrayType: TimeTrack })
  public data: TimeTrack[];
}