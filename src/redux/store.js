import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slicers/favoriteSlicer'

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer
  },
})