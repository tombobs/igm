import { IHashtagState } from '../instagram/hashtag/store';
import { IAuthState } from './auth.state';

export interface State {
  hashtag: IHashtagState;
  auth: IAuthState;
}
