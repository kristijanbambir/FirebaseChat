import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './core/store';
import router from './core/router';
import history from './core/history';
import { setUser } from './core/actions/auth';
import { receiveMessages } from './core/actions/messages';
import { firebaseApp, messagesRef } from './utils/firebase';

let routes = require('./routes.json'); // Loaded with utils/routes-loader.js
const container = document.getElementById('container');

const muiTheme = getMuiTheme({});

function renderComponent(component) {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        {component}
      </Provider>
    </MuiThemeProvider>,
    container
  );
}

// Find and render a web page matching the current URL path,
// if such page is not found then render an error page (see routes.json, core/router.js)
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent));
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render);
render(history.getCurrentLocation());

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json'); // eslint-disable-line global-require
    render(history.getCurrentLocation());
  });
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Set up firebase
messagesRef.on('value', (snap) => {
  const messages = [];
  snap.forEach((child) => {
    messages.push({
      key: child.key,
      name: child.val().name,
      photoUrl: child.val().photoUrl,
      text: child.val().text,
    });
  });
  store.dispatch(receiveMessages(messages));
});

firebaseApp.auth().getRedirectResult().then((result) => {
  // if (result.credential) {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const token = result.credential.accessToken;
  // }
  // The signed-in user info.
  const user = result.user;
  store.dispatch(setUser(user));
})
.catch((error) => this.setState({ error }));
