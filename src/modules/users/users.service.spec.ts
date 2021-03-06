import BadRequestException from '../../core/exceptions/bad-request.exception';
import NotFoundException from '../../core/exceptions/not-found.exception';
import {
  TEST_USER_EMAIL,
  WRONG_TEST_USER_EMAIL,
  creatingUser,
  existingUser, profileData,
} from '../../models/__mocks__/User';
import UserService from './users.service';

jest.mock('../../models/User');
jest.mock('../../models/Role');
jest.mock('../../models/UserRole');

describe('users.service test', () => {
  it('findUserBy method success', async () => {
    const foundUser = await UserService.findUserBy({ email: TEST_USER_EMAIL });
    expect(foundUser.email).toEqual(TEST_USER_EMAIL);
  });

  it('findUserBy throw NotFoundException', async () => {
    try {
      await UserService.findUserBy({ email: WRONG_TEST_USER_EMAIL });
      expect(false).toBeTruthy();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });

  it('createUser method success', async () => {
    const createdUser = await UserService.createUser(creatingUser);
    expect(createdUser.email).toEqual(creatingUser.email);
  });

  it('createUser throw BadRequestException', async () => {
    try {
      await UserService.createUser(existingUser);
    } catch (err) {
      expect(err).toBeInstanceOf(BadRequestException);
    }
  });

  it('updateUserProfile method success', async () => {
    const updatedUser = await UserService.updateUserProfile(profileData, { id: existingUser.id });
    expect(updatedUser.firstName).toEqual(existingUser.firstName);
    expect(updatedUser.phoneNumber).toEqual(profileData.phoneNumber);
  });
});