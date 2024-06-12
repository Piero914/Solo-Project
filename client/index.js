import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, createStore } from 'react-redux';
import App from './App.jsx';
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
console.log('rendering root!');
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
