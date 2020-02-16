import { FETCH_REPOS_LOADING, FETCH_REPOS, fetchRepos } from '../actions/userReposAction';
import reducer from './reposReducer';

describe('repos reducer', () => {
  it('should handle repo loading action', () => {
    const action = { type: FETCH_REPOS_LOADING };
    const initialState = {
      loading: false,
      repos: []
    };

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({
      loading: true,
      repos: []
    });
  });
});
