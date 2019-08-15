import React from 'react';
import Inquiry from '../Inquiry';
import { createMount } from '@material-ui/core/test-utils';
import Root from '../../redux/Root';

describe('<Inquiry /> rendering', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Inquiry />
      </Root>
    );
    //console.log(wrapper.debug());
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('has 2 <input />, <button /> & <textarea /> and a <form /> & <Typography />', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('textarea')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Typography))')).toHaveLength(1);
  });
});

describe('<Inquiry /> can input title, email and content', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Inquiry />
      </Root>
    );

    wrapper
      .find('textarea')
      .at(0)
      .simulate('change', {
        target: { value: 'Content of inquiry.' }
      });
    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value: 'test title' }
      });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value: 'test@email.com' }
      });

    wrapper.update();
  });
  afterEach(() => {
    mount.cleanUp();
  });
  it('changes inputs and textarea after submitting', () => {
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value')
    ).toEqual('test title');
    expect(
      wrapper
        .find('input')
        .at(1)
        .prop('value')
    ).toEqual('test@email.com');
    expect(
      wrapper
        .find('textarea')
        .at(0)
        .prop('value')
    ).toEqual('Content of inquiry.');
  });
});
