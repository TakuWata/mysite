import React from 'react';
import SignUp from '../admin/SignUp';
import Root from '../../redux/Root';
import { createMount } from '@material-ui/core/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<SignUp /> rendering', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Router>
          <SignUp />
        </Router>
      </Root>
    );
  });
  afterEach(() => {
    mount.cleanUp();
  });
  it('has 3 <input /> and a <button />', () => {
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
