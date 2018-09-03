import BadRequestException from '../../core/exceptions/bad-request.exception';
import NotFoundException from '../../core/exceptions/not-found.exception';
import User from '../../models/User';
import { IUserJwt } from '../auth/interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_NOT_FOUND, USER_IS_EXIST } from './users.constants';

const createUser = async (userData: CreateUserDto): Promise<User> => {
  if (await checkUserIfExist(userData.email)) {
    throw new BadRequestException(USER_IS_EXIST);
  }
  return User.create(userData);
};

const checkUserIfExist = async (email: string): Promise<User | boolean> => {
  try {
    return await findUserByEmail(email);
  } catch (err) {
    if (err instanceof NotFoundException) {
      return false;
    }
    throw err;
  }
};

const findUserByEmail = async (email: string): Promise<User> => {
  const user = await User.findOne({
    where: { email },
  });
  if (!user) {
    throw new NotFoundException(USER_NOT_FOUND);
  }
  return user;
};

const updateUserProfile = async (profileData: UpdateUserDto, userJwt: IUserJwt): Promise<User> => {
  const user = await findUserByEmail(userJwt.email);
  return user.update(profileData);
};

export default {
  findUserByEmail,
  createUser,
  updateUserProfile,
};