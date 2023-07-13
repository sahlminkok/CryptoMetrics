import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './cryptos/cryptosSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
});

export default store;
