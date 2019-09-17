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
  it('has 2 <input /> and a <button />', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe('<SignUp /> possible to sign up', () => {
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
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: 'email', value: 'jest@test.com' }
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { name: 'password', value: 'jest1234' }
    });
    wrapper.update();
  });
  afterEach(() => {
    mount.cleanUp();
  });

  it('changes inputs after submitting', () => {
    expect(wrapper.find('input[type="text"]').prop('value')).toEqual(
      'jest@test.com'
    );
    expect(wrapper.find('input[type="password"]').prop('value')).toEqual(
      'jest1234'
    );
  });
});
