//import everything from action types
// import CHANGE_HAIR from '../constants/actionTypes';
// import CHANGE_EYEBROWS from '../constants/actionTypes';
// import CHANGE_EYES from '../constants/actionTypes';
// import CHANGE_NOSE from '../constants/actionTypes';
// import CHANGE_MOUTH from '../constants/actionTypes';
// import React from 'react';
// import { Provider } from 'react-redux';
// // import store from '../store';
import * as types from '../constants/actionTypes.js';

console.log('Made it to the creatorReducer');

const initialState = {
  hair: 'blank',
  eyebrows: 'blank',
  eyes: 'blank',
  nose: 'blank',
  mouth: 'blank',
};

const data = {
  hair: ['blank', 'afro', 'straight'],
  eyebrows: ['blank', 'bushy', 'regular'],
  eyes: ['blank', 'round', 'sharp'],
  nose: ['blank', 'long', 'short'],
  mouth: ['blank', 'small', 'big'],
};

console.log(data);

//now we handle the logic for the creatorReducer

const creatorReducer = (state = initialState, action) => {
  //we'll make a reducer for each type of button action. 5 buttons
  switch (action.type) {
    //case type: change hair
    //console.log('action', action);
    case types.CHANGE_HAIR:
      console.log('Hair changed!');
  }
};

export default creatorReducer;
