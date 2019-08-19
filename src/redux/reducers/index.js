import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import inquiryReducer from './inquiryReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  form: formReducer,
  inquiry: inquiryReducer,
  //checkBox: checkBoxReducer,
  auth: authReducer,
  firebase: firebaseReducer
});
