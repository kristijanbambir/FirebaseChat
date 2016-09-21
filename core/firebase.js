import * as firebase from 'firebase';
import { signOut } from './actions/auth';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyA1CHTck9pF7eSeR0-9283IKZItZgH8hk4',
  authDomain: 'friendlychat-41c04.firebaseapp.com',
  databaseURL: 'https://friendlychat-41c04.firebaseio.com',
  storageBucket: 'friendlychat-41c04.appspot.com',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const messagesRef = firebaseApp.database().ref().child('messages');
const provider = new firebase.auth.GoogleAuthProvider();

export const firebaseSignIn = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const firebaseSignOut = () => {
  firebase.auth().signOut().then(
    () => store.dispatch(signOut()),
    error => console.log('Error signing out:', error) // eslint-disable-line  no-console
  );
};
