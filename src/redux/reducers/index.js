import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import inquiryReducer from './inquiryReducer';
export default combineReducers({
  form: formReducer,
  inquiry: inquiryReducer
});
