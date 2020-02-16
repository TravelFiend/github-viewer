import { combineReducers } from 'redux';
import userInfo from './userInfoReducer';
import repos from './reposReducer';

export default combineReducers({
  userInfo,
  repos
});
