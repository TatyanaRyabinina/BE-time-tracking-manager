import NotFoundException from '../../core/exceptions/not-found.exception';
import { TEST_USER_EMAIL, WRONG_TEST_USER_EMAIL } from '../../models/__mocks__/User';
import UserService from './users.service';

jest.mock('../../models/User');

describe('users.service test', () => {
  it('findUserByEmail method success', async () => {
    const user = await UserService.findUserByEmail(TEST_USER_EMAIL);
    expect(user.email).toEqual(TEST_USER_EMAIL);
  });

  it('findUserByEmail throw NotFoundException', async () => {
    try {
      await UserService.findUserByEmail(WRONG_TEST_USER_EMAIL);
      expect(false).toBeTruthy();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });
});