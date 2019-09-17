// このファイルに統合テストを実装予定です。
// 一旦テストをパスするため、全てコメントアウトします。

// import React from 'react';
// import Root from '../redux/Root';
// import { createMount } from '@material-ui/core/test-utils';
// import Admin from '../components/admin/Admin';
// import App from '../components/App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import puppeteer from 'puppeteer';

// var admin = require('firebase-admin');
// var serviceAccount = require('../../mysite-754ed-firebase-adminsdk-9fcsu-005835d7ad.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://mysite-754ed.firebaseio.com'
// });

// // const isDebugging = () => {
// //   const debugging_mode = {
// //     headless: false,
// //     slowMo: 250,
// //     devtools: true
// //   };
// //   return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
// // };

// describe('<App /> is possible to login and fetch to do list', () => {
//   let wrapper;
//   let mount;
//   beforeEach(() => {
//     mount = createMount();
//     wrapper = mount(
//       <Root>
//         <App />
//       </Root>
//     );

//     // wrapper.find('input[name="email"]').simulate('change', {
//     //   target: { name: 'email', value: 'test@test.com' }
//     // });
//     // wrapper.find('input[name="password"]').simulate('change', {
//     //   target: { name: 'password', value: 'test1234' }
//     // });
//     //wrapper.find('button[type="submit"]').simulate('click');
//     //wrapper.update();
//     //console.log(wrapper.find('WithStyles(ForwardRef(Checkbox))').debug());
//     //console.log(wrapper.find('button[type="submit"]').debug());
//   });
//   afterEach(() => {
//     mount.cleanUp();
//   });

//   it('changes inputs after submitting', async () => {
//     let browser = await puppeteer.launch({
//       headless: false
//       //slowMo: 500
//     });
//     let page = await browser
//       .newPage()
//       .catch(console.error('Failed to open new page'));
//     // page.emulate({
//     //   viewport: {
//     //     width: 500,
//     //     height: 2400
//     //   },
//     //   userAgent: ''
//     // });
//     await page
//       .goto('http://localhost:8080/admin')
//       .catch(console.error('fail to go to login page'));

//     // const html = await page.$eval('.App-title', e => e.innerHTML);
//     // expect(html).toBe('Welcome to React');
//     browser.close().catch(console.error('Failed to close browser'));
//     // wrapper.find('button[type="submit"]').simulate('click');

//     // await console.log(
//     //   expect(wrapper.find('WithStyles(ForwardRef(Checkbox))')).resolves
//     // );
//     // await console.log(wrapper.find('WithStyles(ForwardRef(Checkbox))').debug());

//     //await expect(wrapper.find('input')).toHaveLength(2);
//     //await console.log(wrapper.find('WithStyles(ForwardRef(Checkbox))').debug());
//     // expect(wrapper.find('input[name="email"]').prop('value')).toEqual(
//     //   'test@test.com'
//     // );
//     // expect(wrapper.find('input[name="password"]').prop('value')).toEqual(
//     //   'test1234'
//     // );
//   }, 16000);
// });

// it('can fetch list of to do', () => {

//   // '/admin'へ移動

//   // Login
//   // fetch to do list
// });
