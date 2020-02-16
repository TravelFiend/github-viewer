import { FETCH_REPOS_LOADING, FETCH_REPOS } from '../actions/userReposAction';

const initialState = {
  loading: true,
  repos: []
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case FETCH_REPOS_LOADING:
      return { ...state, loading: true };
    case FETCH_REPOS:
      return { ...state, loading: false, repos: action.payload };
    default: return state;
  }
}
