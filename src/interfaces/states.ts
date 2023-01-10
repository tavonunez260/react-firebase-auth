import { Skills } from './components'

export interface AuthState {
  auth: boolean
  token?: string
  localId?: string
  name?: string
}

export interface UIState {
  isLoading: boolean
  modal: {
    open: boolean
    title: string | null
    description: string | null
    error: boolean | null
    onClose?: () => void
  }
}

export interface UserState {
  firstName?: string
  lastName?: string
  position?: string
  email?: string
  avatar?: string
  skills?: Skills[]
}
