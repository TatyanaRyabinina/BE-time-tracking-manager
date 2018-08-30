import { USER_NOT_FOUND } from '../../core/constants/error.constants';
import NotFoundException from '../../core/exceptions/not-found.exception';
import User from '../../models/User';

const findUserByEmail = async (email: string) => {
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    return user;
  } else {
    throw new NotFoundException(USER_NOT_FOUND);
  }
};

export default {
  findUserByEmail,
};