import { areReposLoading, getTheRepos } from './reposSelectors';

describe('repo selectors', () => {
  it('should select repos loading state', () => {
    const state = {
      repos: {
        loading: false,
        repos: []
      }
    };

    expect(areReposLoading(state)).toEqual(false);
  });
});
