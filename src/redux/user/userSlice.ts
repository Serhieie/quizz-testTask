import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setTotalCorrectAnswers: (state, action: PayloadAction<number>) => {
      state.totalCorrectAnswers = state.totalCorrectAnswers + action.payload;
    },
    setCurrentCorrectAnswers: (state, action: PayloadAction<number>) => {
      state.currentCorrectAnswers =
        state.currentCorrectAnswers + action.payload;
    },
    resetCurrentCorrectAnswers: (state) => {
      state.currentCorrectAnswers = 0;
    },
  },
});

const persistConfig = {
  key: 'user',
  storage,
};

export const persistedUserReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

export const {
  setUserName,
  setTotalCorrectAnswers,
  setCurrentCorrectAnswers,
  resetCurrentCorrectAnswers,
} = userSlice.actions;
