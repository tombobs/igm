import { IUser } from '@rly.gd/api-interfaces';



export interface IAuthState {
  loggedInUser: IUser;
  loggedInUserLoading: boolean;
}

export const initialAuthState: IAuthState = {
  loggedInUser: null,
  loggedInUserLoading: false
};
