import { CUSTOMER_ID } from '../../models/__mocks__/Customer';
import { ProjectDto } from '../../modules/projects/dto/project.dto';
import { BasicMock } from './BaseMock';

export const PROJECT_ID = 1;
export const FAKE_ID = 10;

export const creatingProject = {
  projectName: 'TestProjectName',
  description: 'test test',
};

export const existingProject = {
  id: PROJECT_ID,
  projectName: 'ExistingProjectName',
  description: 'test description',
  customerId: CUSTOMER_ID,
};

this.existingProject.destroy = () => {
  return 'project was deleted';
};

this.existingProject.update = (data: ProjectDto) => {
  return data;
};

export const projectProfileData = {
  projectName: 'UpdatingProjectName',
  description: 'update test description',
  customerId: CUSTOMER_ID,
};

export default new BasicMock(existingProject);