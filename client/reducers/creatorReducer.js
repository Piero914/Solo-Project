

//import everything from action types
import React from 'react';
import * from '../constants/actionTypes';

const initialState = {
    hair: 'blank',
    eyebrows: 'blank',
    eyes: 'blank',
    nose: 'blank',
    mouth: 'blank'
};

const data = { 
    hair: [],
    eyebrows: [],
    eyes: [],
    nose: [],
    mouth:[],
}

console.log(data)







//now we handle the logic for the creatorReducer

const creatorReducer = (state = initialState, action) => {
 
    //we'll make a reducer for each type of button action. 5 buttons
    switch (action.type){
        //case type: change hair
        //console.log('action', action);

        case types.CHANGE_HAIR:
            console.log('Hair changed!');





    }

}


export default creatorReducer;