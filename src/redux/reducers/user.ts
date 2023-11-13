import { createSlice } from '@reduxjs/toolkit';
import profile_img from 'assets/profile.jpg';

const initialState = {
  data: {
    img: profile_img,
    name: 'Daniella',
  },
};
export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
