import { LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/types';

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed'
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
