import { createSlice } from '@reduxjs/toolkit'

type LikeState = {
  colors: Record<string, boolean>;
  likedItem: string[];
};

const initialState: LikeState = {
  colors: {},
  likedItem: [],
};

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
      toggleColor(state, action) {
        const id = action.payload

        if (state.colors[id] !== undefined) { 
          state.colors[id] = !state.colors[id]; 
        } else {
          state.colors[id] = true; 
        }
      },
    },
})

export const { toggleColor } = likeSlice.actions
export const likeReducer = likeSlice.reducer