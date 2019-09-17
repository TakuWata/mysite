import React from 'react';
import Admin from '../admin/Admin';
import Root from '../../redux/Root';
import { createMount } from '@material-ui/core/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Admin /> rendering', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Router>
          <Admin />
        </Router>
      </Root>
    );
    //console.log(wrapper.debug());
  });
  afterEach(() => {
    mount.cleanUp();
  });
  it('has 12 <div /> ', () => {
    expect(wrapper.find('div')).toHaveLength(12);
  });
});
