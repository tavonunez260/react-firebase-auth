import React from 'react'
import { Loader, MainNav, PopUpModal } from 'components'
import { LoginPage, ProfilePage, SignUpPage } from 'pages'
import { RootState, uiSlice } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { SettingsPage } from './pages/SettingsScreen'

export const App = (): JSX.Element => {
  const { isLoading, modal } = useSelector((state: RootState) => state.ui)
  const { auth } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  return (
    <>
      {isLoading && <Loader />}
      <PopUpModal
        open={modal.open}
        handleClose={() =>
          dispatch(
            uiSlice.actions.showModal({ open: false, title: null, description: null, error: null })
          )
        }
      />
      <MainNav />
      <div className="w-full h-[calc(100vh-_10rem)] flex justify-center items-center">
        <Routes>
          <Route
            path="/*"
            element={
              !auth ? (
                <Routes>
                  <Route path="/register" element={<SignUpPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/*" element={<Navigate to="/login" replace />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/*" element={<Navigate to="/profile" replace />} />
                </Routes>
              )
            }
          />
        </Routes>
      </div>
    </>
  )
}
