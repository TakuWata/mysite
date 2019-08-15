import { CREATE_INQUIRY } from './types';
import { db } from '../../config/fbConfig';
import history from '../../../history';

export const createInquiry = formValues => async dispatch => {
  await db.collection('inquiries').add({
    ...formValues,
    createdAt: new Date()
  });
  dispatch({
    type: CREATE_INQUIRY,
    payload: formValues
  });
  history.push('./');
};
