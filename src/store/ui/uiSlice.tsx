import { UIState } from 'interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UIState = {
  isLoading: false,
  modal: {
    open: false,
    title: null,
    description: null,
    error: null
  }
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>): void => {
      const aux = state
      aux.isLoading = payload
    },
    showModal: (
      state,
      {
        payload
      }: PayloadAction<{
        open: boolean
        title: string | null
        description: string | null
        error: boolean | null
        onClose?: () => void
      }>
    ): void => {
      const aux = state
      aux.modal.open = payload.open
      aux.modal.title = payload.title
      aux.modal.description = payload.description
      aux.modal.error = payload.error
    }
  }
})
