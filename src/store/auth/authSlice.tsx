import { AuthState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  auth:
    !!localStorage.getItem('localId') &&
    !!localStorage.getItem('token') &&
    !!localStorage.getItem('name'),
  name: localStorage.getItem('name') as string,
  localId: localStorage.getItem('localId') as string,
  token: localStorage.getItem('token') as string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, { payload }: PayloadAction<AuthState>): void => {
      const aux = state
      aux.auth = payload.auth
      aux.localId = payload.localId
      aux.token = payload.token
      localStorage.setItem('localId', aux.localId as string)
      localStorage.setItem('token', aux.token as string)
    },
    setName: (state, { payload }: PayloadAction<string>): void => {
      const aux = state
      aux.name = payload
      localStorage.setItem('name', aux.name as string)
    },
    logout: (state): void => {
      const aux = state
      aux.auth = false
      aux.name = undefined
      aux.token = undefined
      aux.localId = undefined
      localStorage.clear()
    }
  }
})
