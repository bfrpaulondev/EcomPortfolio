// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Você criará o rootReducer mais tarde

const store = configureStore({
  reducer: rootReducer,
});

export default store;
