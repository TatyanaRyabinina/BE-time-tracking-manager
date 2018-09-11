import { BasicResponse } from '../../../core/responses/basic.response';
import Project from '../../../models/Project';
import { DefinitionProperty } from '../../../swagger';

export class ProjectResponse extends BasicResponse<Project> {
  @DefinitionProperty()
  public data: Project;
}