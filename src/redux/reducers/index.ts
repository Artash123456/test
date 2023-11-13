import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

//-----------reducers------------
import { navigation } from './navigation';
import { user } from './user';
import { movies } from './movies';

const combinedReducers = combineReducers({
  navigation: navigation.reducer,
  user: user.reducer,
  movies: movies.reducer,
});

export const store = configureStore({ reducer: combinedReducers });
