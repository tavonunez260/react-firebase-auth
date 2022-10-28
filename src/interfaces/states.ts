import { Skills } from './components'

export interface AuthState {
  auth: boolean
  token?: string | undefined
  localId?: string | undefined
  name?: string | undefined
}

export interface UIState {
  isLoading: boolean
  modal: {
    open: boolean
    title: string | null
    description: string | null
    error: boolean | null
  }
}

export interface UserState {
  firstName: string | undefined
  lastName: string | undefined
  position: string | undefined
  avatar: string | undefined
  skills: Skills[] | undefined
}
