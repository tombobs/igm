import { createAction, props } from '@ngrx/store';
import { IUser } from '@rly.gd/api-interfaces';

export const authActions = {
  registerUser: '[Auth] RegisterUser',

  login: '[Auth] Login',
  loginSuccess: '[Auth] LoginSuccess',
  loginError: '[Auth] LoginError',
  logout: '[Auth] Logout',
};

export const registerUser = createAction(
  authActions.registerUser,
  props<{user: IUser}>()
);

export const login = createAction(
  authActions.login,
  props<{user: IUser}>()
);
export const loginSuccess = createAction(
  authActions.loginSuccess,
  props<{user?: IUser, accessToken?: string}>()
);
export const loginError = createAction(
  authActions.loginError,
  props<{message: string, statusCode: 401}>()
);
export const logout = createAction(
  authActions.logout
);
