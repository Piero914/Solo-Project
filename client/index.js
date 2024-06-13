import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider, createStore } from 'react-redux';
import App from './components/App.jsx';
import store from './store.js';

//  App
//    |--Logo
//    |--MainContainer
//       |--Creator
//       |--ButtonContainer
//          |--Button (Various)
//
//    |--Footer

const root = createRoot(document.getElementById('root'));
console.log('rendering root!', root);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
root.render(<h1>my react code</h1>);
