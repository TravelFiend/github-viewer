import { fetchUserInfo, FETCH_USER_INFO, FETCH_INFO_LOADING } from './userInfoActions';

jest.mock('../services/getGithubInfo.js');

describe('user info actions', () => {
  it('should create a fetch info action', () => {
    const dispatch = jest.fn();
    const action = fetchUserInfo();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_INFO_LOADING
        });
      });
  });
});
