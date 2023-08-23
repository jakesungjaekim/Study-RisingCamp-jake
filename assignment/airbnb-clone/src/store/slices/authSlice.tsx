import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    // ...
  }
})

export const {  }  = authSlice.actions
export const authReducer = authSlice.reducer