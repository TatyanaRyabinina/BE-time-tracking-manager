import NotFoundException from '../../core/exceptions/not-found.exception';
import { CUSTOMER_ID } from '../../models/__mocks__/Customer';
import {
  creatingProject,
  existingProject,
  projectProfileData,
  PROJECT_ID,
  FAKE_ID,
} from '../../models/__mocks__/Project';
import ProjectService from './projects.service';

jest.mock('../../models/Project');
jest.mock('../../models/Customer');

describe('customers.service test', () => {

  it('findProjectById method success', async () => {
    const foundProject = await ProjectService.findProjectById(existingProject.id);
    expect(foundProject.projectName).toEqual(existingProject.projectName);
  });

  it('findProjectById throw NotFoundException', async () => {
    try {
      await ProjectService.findProjectById(FAKE_ID);
      expect(false).toBeTruthy();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });

  it('createProject method success', async () => {
    const createdProject = await ProjectService.createProject(creatingProject, CUSTOMER_ID);
    expect(createdProject.projectName).toEqual(creatingProject.projectName);
  });

  it('removeProject method success', async () => {
    const removedProject = await ProjectService.removeProject(PROJECT_ID);
    expect(removedProject).toEqual('project was deleted');
  });

  it('updateProjectInfo method success', async () => {
    const updatedProject = await ProjectService.updateProjectInfo(PROJECT_ID, projectProfileData);
    expect(updatedProject.projectName).toEqual(projectProfileData.projectName);
  });

  it('getAllProjects method success', async () => {
    const allProjects = await ProjectService.getAllProjects(CUSTOMER_ID);
    expect(allProjects[0].id).toEqual(1);
  });

  it('getAllProjects throw NotFoundException', async () => {
    try {
      await ProjectService.getAllProjects(FAKE_ID);
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });
});