import { configureStore } from '@reduxjs/toolkit';
import creatorReducer from './reducers/creatorReducer';

const store = configureStore({
  reducer: {
    creator: creatorReducer,
  },
});

export default store;
