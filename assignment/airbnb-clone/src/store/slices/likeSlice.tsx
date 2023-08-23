import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLikeState } from '../../@types/TLikeState'

const initialState: TLikeState = {
  colors: {},
  likedItem: [],
};

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
      toggleColor(state, action: PayloadAction<string>) {
        const id = action.payload

        // if (state.colors[id] !== undefined) { 
        //   state.colors[id] = !state.colors[id]; 
        // } else {
        //   state.colors[id] = true; 
        // }

        state.colors[id] = !state.colors[id];

        if (state.colors[id]) {
          state.likedItem.push(id);
        } else {
          state.likedItem = state.likedItem.filter(item => item !== id);
        }

      },
    },
})

export const { toggleColor } = likeSlice.actions
export const likeReducer = likeSlice.reducer