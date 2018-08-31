import { BasicMock } from './BaseMock';

export const TEST_USER_EMAIL = 'qwerty@qwe.rty';
export const WRONG_TEST_USER_EMAIL = 'wrongemail@gwe.rty';

const user = {
  email: TEST_USER_EMAIL,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  birthdayDate: '1992-12-01',
  hireDate: '2017-12-11',
};

export default new BasicMock(user);