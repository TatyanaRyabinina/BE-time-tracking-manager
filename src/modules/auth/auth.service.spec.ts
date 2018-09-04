import { TEST_USER_EMAIL, WRONG_TEST_USER_EMAIL } from '../../models/__mocks__/User';
import AuthService from './auth.service';

const MAGIC_LINK = '123456789';

jest.mock('../../models/User');
jest.mock('../mail/mail.service');
jest.mock('../redis/redis.service');

describe('auth.service method test', () => {
  it('verifyUser method success', async () => {
    const data = await AuthService.verifyUser(TEST_USER_EMAIL);
    expect(typeof data).toBe('string');
    expect(data).toBe('email was sent');
  });

  it('verifyToken method success', async () => {
    const data = await AuthService.verifyToken(TEST_USER_EMAIL, MAGIC_LINK);
    expect(typeof data).toBe('object');
    expect(typeof data.token).toBe('string');
    expect(typeof data.user).toBe('object');
    expect(data.user.email).toEqual(TEST_USER_EMAIL);
  });
});