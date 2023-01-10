import { UserState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = {
  firstName: undefined,
  lastName: undefined,
  position: undefined,
  avatar: undefined,
  skills: undefined,
  email: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<UserState>): void => {
      const aux = state
      if (payload.firstName) aux.firstName = payload.firstName
      if (payload.lastName) aux.lastName = payload.lastName
      if (payload.position) aux.position = payload.position
      if (payload.avatar) aux.avatar = payload.avatar
      if (payload.skills) aux.skills = payload.skills
      if (payload.email) aux.email = payload.email
    }
  }
})
