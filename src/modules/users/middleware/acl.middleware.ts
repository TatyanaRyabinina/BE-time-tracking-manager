import { Context } from 'koa';
import { ADMIN_ROLE } from '../../../core/constants/role.constants';
import PermissionDeniedException from '../../../core/exceptions/permission-denied-exception';
import UserRole from '../../../models/UserRole';
import { USER_IS_NOT_ADMIN_ROLE } from '../users.constants';

export const setIsAdmin = (ctx: Context, next: () => Promise<void>): Promise<void> => {
  if (ctx.state.user.roles.some((userRole: UserRole) => userRole.role.roleName === ADMIN_ROLE)) {
    ctx.state.user.isAdmin = true;
  }
  return next();
};

export const isAdmin = () => {
  return async (ctx: Context, next: () => Promise<void>) => {
    console.log(ctx.state.user.isAdmin);
    if (ctx.state.user.isAdmin) {
      return next();
    } else {
      throw new PermissionDeniedException(USER_IS_NOT_ADMIN_ROLE);
    }
  };
};
