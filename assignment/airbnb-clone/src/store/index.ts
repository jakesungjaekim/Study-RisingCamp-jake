import { configureStore } from '@reduxjs/toolkit' 
import { likeReducer, toggleColor } from './slices/likeSlice';

const store = configureStore({
  reducer: {
    like: likeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>; 

export { store, toggleColor }
