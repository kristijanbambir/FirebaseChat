const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyA1CHTck9pF7eSeR0-9283IKZItZgH8hk4',
  authDomain: 'friendlychat-41c04.firebaseapp.com',
  databaseURL: 'https://friendlychat-41c04.firebaseio.com',
  storageBucket: 'friendlychat-41c04.appspot.com',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messagesRef = firebaseApp.database().ref().child('messages');

module.exports = {
  firebaseApp,
  messagesRef,
};
