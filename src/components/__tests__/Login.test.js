import React from 'react';
import Login from '../admin/Login';
import Root from '../../redux/Root';
import { createMount, createShallow } from '@material-ui/core/test-utils';
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
  it('has 3 <input /> and a <button />', () => {
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('button')).toHaveLength(2);
  });
});

// describe('<Login /> rendering and possible to login', () => {
//   let wrapper;
//   let mount;
//   beforeEach(() => {
//     mount = createMount();
//     wrapper = mount(
//       <Root>
//         <Login />
//       </Root>
//     );

//     wrapper
//       .find('input')
//       .at(0)
//       .simulate('change', {
//         target: { value: 'test@test.com' }
//       });
//     wrapper
//       .find('input')
//       .at(0)
//       .simulate('change', {
//         target: { value: 'test1234' }
//       });
//     wrapper.update();
//     console.log(wrapper.debug());
//   });
//   afterEach(() => {
//     mount.cleanUp();
//   });

//   it('changes inputs after submitting', () => {
//     expect(
//       wrapper
//         .find('input')
//         .at(0)
//         .prop('value')
//     ).toEqual('test@test.com');
//     expect(
//       wrapper
//         .find('input')
//         .at(1)
//         .prop('value')
//     ).toEqual('test1234');
//   });
// });
