import { FETCH_USER_INFO, FETCH_INFO_LOADING } from '../actions/userInfoActions';
import reducer from './userInfoReducer';

describe('user info reducer', () => {
  it('should handle user info loading action', () => {
    const action = { type: FETCH_INFO_LOADING };
    const initialState = {
      loading: false,
      info: null
    };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({
      loading: true,
      info: null
    });
  });
});
