import React from 'react'
import { authSlice, RootState } from 'store'
import { AppBar, Box, Link as MaterialLink, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const MainNav = (): JSX.Element => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state: RootState) => state.auth)
  const { firstName } = useSelector((state: RootState) => state.user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!auth && (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React Firebase App
              </Typography>
              <div className="flex gap-4">
                <MaterialLink
                  component={RouterLink}
                  to="/login"
                  color="inherit"
                  className="!no-underline">
                  <Typography variant="button" className="!text-[18px]">
                    Login
                  </Typography>
                </MaterialLink>
                <MaterialLink
                  component={RouterLink}
                  to="/register"
                  color="inherit"
                  className="!no-underline">
                  <Typography variant="button" className="!text-[18px]">
                    Register
                  </Typography>
                </MaterialLink>
              </div>
            </>
          )}
          {auth && (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome, {firstName}
              </Typography>
              <div className="flex gap-4">
                <MaterialLink
                  component={RouterLink}
                  to="/profile"
                  color="inherit"
                  className="!no-underline">
                  <Typography variant="button" className="!text-[18px]">
                    Profile
                  </Typography>
                </MaterialLink>
                <MaterialLink
                  component={RouterLink}
                  to="/settings"
                  color="inherit"
                  className="!no-underline">
                  <Typography variant="button" className="!text-[18px]">
                    Settings
                  </Typography>
                </MaterialLink>
                <MaterialLink
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  onClick={() => {
                    dispatch(authSlice.actions.logout())
                  }}
                  className="!no-underline">
                  <Typography variant="button" className="!text-[18px]">
                    Logout
                  </Typography>
                </MaterialLink>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
