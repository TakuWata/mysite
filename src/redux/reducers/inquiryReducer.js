import { CREATE_INQUIRY } from '../actions/types';

const INITIAL_STATE = {};
const inquiryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_INQUIRY:
      return state;
    default:
      return state;
  }
};
export default inquiryReducer;
