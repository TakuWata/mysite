import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBMYy8oM9AbEkbXEMwzunIdTk8V79BFO9c',
  authDomain: 'mysite-754ed.firebaseapp.com',
  databaseURL: 'https://mysite-754ed.firebaseio.com',
  projectId: 'mysite-754ed',
  storageBucket: '',
  messagingSenderId: '565901069236',
  appId: '1:565901069236:web:b459cb389caa0d60'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

//firebase.storage();
export default firebase;
