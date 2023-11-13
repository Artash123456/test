import { createSlice } from '@reduxjs/toolkit';
import home_icon from 'assets/icons/Group 46.png';
import search_icon from 'assets/icons/ICON - Search.png';
import tv_icon from 'assets/icons/Group 56.png';
import movies_icon from 'assets/icons/Group 54.png';
import genres_icon from 'assets/icons/Group 53.png';
import watch_later_icon from 'assets/icons/Group 47.png';
const initialState = {
  menu: [
    { name: 'Search', path: '/search', icon: search_icon },
    { name: 'Home', path: '/', icon: home_icon },
    { name: 'TV Shows', path: '/tv-shows', icon: tv_icon },
    { name: 'Movies', path: '/movies', icon: movies_icon },
    { name: 'Genres', path: '/genres', icon: genres_icon },
    { name: 'Watch Later', path: '/watch-later', icon: watch_later_icon },
  ],
};
export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
});
