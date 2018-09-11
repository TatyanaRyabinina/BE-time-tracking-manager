import { IsArray, IsNotEmpty } from 'class-validator';
import { DefinitionProperty } from '../../../swagger';
import { CreateTimeTrack } from './create-time-track.dto';

export class AddTimeTracksDto {
  @DefinitionProperty({ arrayType: CreateTimeTrack })
  @IsNotEmpty()
  @IsArray()
  public timeTracks: CreateTimeTrack[];
}