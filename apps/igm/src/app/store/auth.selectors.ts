import { createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';
import { State } from './state';

export const authState = (state: State) => state.auth;

export const loggedInUser = createSelector(authState, (state: IAuthState) => state.loggedInUser);
export const loggedInUserLoading = createSelector(authState, (state: IAuthState) => state.loggedInUserLoading);
