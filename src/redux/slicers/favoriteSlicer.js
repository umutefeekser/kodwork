import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteFunc: (state, action) => {
      if(state.list.findIndex(i => i.id == action.payload.id) >= 0) {
        state.list = state.list.filter(i => i.id !== action.payload.id);
      }else{
        state.list.push(action.payload)
      }
    },

    setFavorites: (state, action) => {
      state.list = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { favoriteFunc, setFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer