import store from './store';

import React from 'react';
import { Provider } from 'react-redux';

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
