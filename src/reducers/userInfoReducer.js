import { FETCH_USER_INFO, FETCH_INFO_LOADING } from '../actions/userInfoActions';

const initialState = {
  loading: true,
  info: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_INFO_LOADING:
      return { ...state, loading: true };
    default: return state;xs;
  }
};

export default reducer;
