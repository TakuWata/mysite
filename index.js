import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Root from './src/redux/Root';
import store from './src/redux/store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    document.querySelector('#root')
  );
});
