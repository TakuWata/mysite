import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Root from './src/redux/Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
