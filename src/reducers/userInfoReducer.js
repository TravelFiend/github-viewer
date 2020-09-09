import { FETCH_USER_INFO, FETCH_INFO_LOADING, SET_USERNAME } from '../actions/userInfoActions';

const initialState = {
  loading: true,
  info: {},
  username: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO:
      return { ...state, loading: false, info: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    default: return state;
  }
};

export default reducer;
