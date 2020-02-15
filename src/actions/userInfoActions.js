import { getGithubInfo } from '../services/getGithubInfo';

export const FETCH_INFO_LOADING = 'FETCH_INFO_LOADING';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const fetchUserInfo = loginName => dispatch => {
  dispatch({ type: FETCH_INFO_LOADING });
  return getGithubInfo(loginName)
    .then(info => {
      dispatch({
        type: FETCH_USER_INFO,
        payload: info
      });
    });
};


