import { UpdateUserDto } from '../../modules/users/dto/update-user.dto';
import { BasicMock } from './BaseMock';

export const TEST_USER_EMAIL = 'qwerty@qwe.rty';
export const WRONG_TEST_USER_EMAIL = 'wrongemail@gwe.rty';

export enum userScopes {
  withAll,
}

export const creatingUser = {
  email: 'create@user.com',
  firstName: 'TestName',
  lastName: 'LastName',
};

export const existingUser = {
  id: 1,
  email: TEST_USER_EMAIL,
  firstName: 'Ivan',
  lastName: 'Ivanov',
};

this.existingUser.update = (data: UpdateUserDto) => {
  return data;
};

export const profileData = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  avatar: 'avatarstring',
  birthdayDate: new Date(1992, 12, 1),
  hireDate: new Date(2017, 12, 11),
  phoneNumber: '0501231230',
  telegram: '@telegramname',
  skype: 'skypename',
  slack: 'slackname@qwe.er',
  departmentId: 0,
  professionId: 0,
  professionalLevelId: 0,
};

export default new BasicMock(existingUser);