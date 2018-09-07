import BadRequestException from '../../core/exceptions/bad-request.exception';
import NotFoundException from '../../core/exceptions/not-found.exception';
import User from '../../models/User';
import UserRole from '../../models/UserRole';
import { IUserJwt } from '../auth/interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_NOT_FOUND, USER_IS_EXIST } from './users.constants';

const createUser = async (userData: CreateUserDto): Promise<User> => {
  if (await checkUserIfExist(userData.email)) {
    throw new BadRequestException(USER_IS_EXIST);
  }
  const user = await User.create(userData);
  await UserRole.create({ userId: user.id });
  return user;
};

const checkUserIfExist = async (email: string): Promise<User | boolean> => {
  try {
    return await findUserBy({ email });
  } catch (err) {
    if (err instanceof NotFoundException) {
      return false;
    }
    throw err;
  }
};

const findUserBy = async (params: {}): Promise<User> => {
  const user = await User.findOne({
    where: params,
  });
  if (!user) {
    throw new NotFoundException(USER_NOT_FOUND);
  }
  return user;
};

const updateUserProfile = async (profileData: UpdateUserDto, userJwt: IUserJwt): Promise<User> => {
  const user = await findUserBy({ id: userJwt.id });
  return user.update(profileData);
};

export default {
  findUserBy,
  createUser,
  updateUserProfile,
};