import { configureStore } from '@reduxjs/toolkit';
import creatorReducer from './reducers/creatorReducer.js';

const store = configureStore({
  reducer: {
    creator: creatorReducer,
  },
});

export default store;
