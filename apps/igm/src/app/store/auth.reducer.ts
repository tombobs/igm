import { Action, createReducer, on } from '@ngrx/store';
import { login, loginSuccess, registerUser } from './auth.actions';
import { IAuthState, initialAuthState } from './auth.state';

const _authReducer = createReducer(
  initialAuthState,
  on(registerUser, login, (state: IAuthState): IAuthState => {
    return { ...state, loggedInUserLoading: true };
  }),
  on(loginSuccess, (state: IAuthState, {user, accessToken}): IAuthState => {
    return { ...state, loggedInUser: user, loggedInUserLoading: false };
  })
);

export function authReducer(state: IAuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
