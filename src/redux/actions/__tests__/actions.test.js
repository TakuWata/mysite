import * as actions from '../index';
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
} from '../types';
import firebase, { db } from '../../../config/fbConfig';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MockFirebase } from 'firebase-mock';

const middleware = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middleware);

// jest.mock(actions, () => new Promise(resolve => true));

let mockProps;
// Mock all the exports in the module.
function mockFirebaseService() {
  return new Promise(resolve => resolve(true));
}

// jest.mock(
//   '../../../config/fbConfig',
//   () =>

//     new Promise(resolve =>
//       resolve({

//         signInWithEmailAndPassword: () => {
//           return { getIdToken: () => '123' };
//         }
//       })
//     )
// );
// jest.mock('../../../config/fbConfig', () => {
//   const mockauth = new firebasemock.MockAuthentication();
//   //const mockfirestore = new firebasemock.MockFirestore();
//   return new firebasemock.MockFirebaseSdk(() => mockauth).auth().flush();
// });

describe('login actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    //firebase.auth().flush();
  });
  it('signIn should call firebase', () => {
    const cred = { email: 'test@test.com', password: 'test1234' };
    store
      .dispatch(actions.login(cred))
      .then(() => {
        //const actions = store.getActions();
        //console.log(actions);
        expect(firebase.auth().currentUser).toBe(null);
      })
      .catch(err => console.log('error', err));
  });
});

//it('login action', () => {
//   const store = mockStore({});
//   const cred = { email: 'test@test.com', password: 'test1234' };
//   return store.dispatch(actions.login(cred)).then(() => {
//     const actions = store.getActions();
//     expect(actions).toEqual('test');
//   });
// const formValues = {
//   title: 'test title',
//   email: 'jest@jj.com',
//   content: 'Jest is useful'
// };
// const expectedAction = {
//   type: CREATE_INQUIRY,
//   payload: formValues
// };
// expect(actions.createInquiry(formValues)).toEqual(expectedAction);

//action.loginは、credと、dispatchを入れると、TYPE: LOGIN_SUCCESS, payload: credがreturnされる

// const login = actions.login;
// jest.mock(login, () => ({
//   login = (cred) = async dispatch => {
//     if (cred.email === 'test@test.com' && cred.password === 'test1234') {
//       return Promise.resolve({ email: 'test@test.com' }).then(()=>{
//         dispatch({ type: LOGIN_SUCCESS, payload: cred });
//       });
//     } else {
//       return Promise.reject({ error: 'verification error' }).catch({
//         type: LOGIN_ERROR, err
//       });
//     }
//   }
// }));

// });
