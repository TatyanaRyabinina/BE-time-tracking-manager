import { BasicResponse } from '../../../core/responses/basic.response';
import Project from '../../../models/Project';
import { DefinitionProperty } from '../../../swagger';

export class ProjectsResponse extends BasicResponse<Project[]> {
  @DefinitionProperty({ arrayType: Project })
  public data: Project[];
}