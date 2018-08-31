import { EMAIL_CONSTANTS } from './constants';
import { send } from './mail-gun.service';
import { sendMail } from './mail.service';

jest.mock('./mail-gun.service');

describe('Mail Service Test', () => {
  it('Send Mail Test with right params', async () => {
    const data = { firstName: 'test', lastName: 'test', magicLink: 'test' };
    const result = await sendMail(
      data,
      'test-recepient@mail.com',
      EMAIL_CONSTANTS.MAGIC_LINK,
    );
    const mockResult = await send('');
    expect(result).toEqual(mockResult);
  });
});