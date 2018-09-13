import NotFoundException from '../../core/exceptions/not-found.exception';
import Project from '../../models/Project';
import CustomerService from '../customers/customers.service';
import { ProjectDto } from './dto/project.dto';
import { PROJECT_NOT_FOUND } from './projects.constants';

const getAllProjects = async (customerId: number): Promise<Project[]> => {
  const projects = await Project.findAll({
    where: { customerId },
  });
  if (!projects) {
    throw new NotFoundException(PROJECT_NOT_FOUND);
  }
  return projects;
};

const findProjectById = async (id: number): Promise<Project> => {
  const project = await Project.findOne({
    where: { id },
  });
  if (!project) {
    throw new NotFoundException(PROJECT_NOT_FOUND);
  }
  return project;
};

const createProject = async (projectData: ProjectDto, customerId: number): Promise<Project> => {
  await CustomerService.findCustomerById(customerId);
  return Project.create({ ...projectData, customerId });
};

const updateProjectInfo = async (id: number, projectData: ProjectDto) => {
  const updatingProject = await findProjectById(id);
  return updatingProject.update(projectData);
};

const removeProject = async (id: number) => {
  const removingCustomer = await findProjectById(id);
  return removingCustomer.destroy();
};

export default {
  getAllProjects,
  findProjectById,
  createProject,
  updateProjectInfo,
  removeProject,
};