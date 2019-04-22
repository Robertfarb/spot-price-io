import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import configureStore from './store/store';

// document.addEventListener("DOMContentLoaded", () => {
//   let store;
//   if(window.currentUser) {
//     const preloadedState = {
//       entities: {
//         users: {[window.currentUser.id]: window.currentUser}
//       },
//       session: {id: window.currentUser.id}
//     }
//     store = configureStore(preloadedState);
//   } else {
//     store = configureStore();
//   }
// })

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
