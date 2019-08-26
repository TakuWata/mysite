import authReducer from '../authReducer';
import inquiryReducer from '../inquiryReducer';
import {
  CREATE_INQUIRY,
  FETCH_INQUIRIES,
  FETCH_INQUIRIES_ERR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  EDIT_INQUIRY,
  EDIT_INQUIRY_ERR
} from '../../actions/types';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({ authError: null });
  });
  it('should handle login error', () => {
    expect(authReducer('', { type: LOGIN_ERROR })).toEqual({
      authError: 'Login failed'
    });
  });
  it('should return null when type is LOGIN_SUCCESS', () => {
    expect(authReducer('', { type: LOGIN_SUCCESS })).toEqual({
      authError: null
    });
  });
});
