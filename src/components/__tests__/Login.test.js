import React from 'react';
import Login from '../admin/Login';
import Root from '../../redux/Root';
import { createMount } from '@material-ui/core/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Login /> rendering', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Router>
          <Login />
        </Router>
      </Root>
    );
  });
  afterEach(() => {
    mount.cleanUp();
  });
  it('has 2 <input /> and a <button />', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe('<Login /> possible to login', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Router>
          <Login />
        </Router>
      </Root>
    );
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: 'email', value: 'test@test.com' }
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { name: 'password', value: 'test1234' }
    });
    wrapper.update();
  });
  afterEach(() => {
    mount.cleanUp();
  });

  it('changes inputs after submitting', () => {
    expect(wrapper.find('input[type="text"]').prop('value')).toEqual(
      'test@test.com'
    );
    expect(wrapper.find('input[type="password"]').prop('value')).toEqual(
      'test1234'
    );
  });
});
