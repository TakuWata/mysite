import {
  CREATE_INQUIRY,
  FETCH_INQUIRIES,
  FETCH_INQUIRIES_ERR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './types';
import firebase, { db } from '../../config/fbConfig';
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

export const fetchInquiries = () => async dispatch => {
  let inquiriesArray = [];
  await db
    .collection('inquiries')
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        inquiriesArray.push(data);
      });
      dispatch({ type: FETCH_INQUIRIES, payload: inquiriesArray });
    })
    .catch(err => {
      dispatch({ type: FETCH_INQUIRIES_ERR, err });
    });
};

export const login = cred => async dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(cred.email, cred.password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, err });
    });
};

export const logOut = () => async => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      history.push('/');
    });
};

export const signUp = cred => async dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(cred.email, cred.password)
    .then(() => {
      dispatch({ type: SIGNUP_SUCCESS });
      history.push('/admin');
    })
    .catch(err => {
      dispatch({ type: SIGNUP_ERROR, err });
    });
};
