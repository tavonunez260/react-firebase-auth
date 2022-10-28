import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { uiSlice } from './ui'
import { userSlice } from './user'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
