import { UserState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = {
  firstName: undefined,
  lastName: undefined,
  position: undefined,
  avatar: undefined,
  skills: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<UserState>): void => {
      const aux = state
      aux.firstName = payload.firstName
      aux.lastName = payload.lastName
      aux.position = payload.position
      aux.avatar = payload.avatar
      aux.skills = payload.skills
    }
  }
})
