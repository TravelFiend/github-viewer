import { getRepos } from '../services/getGithubInfo';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = loginName => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepos(loginName)
    .then(repos => {
      dispatch({
        type: FETCH_REPOS,
        payload: repos
      });
    });
};
