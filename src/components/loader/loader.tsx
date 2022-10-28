import React from 'react'
import clsx from 'clsx'
import { CircularProgress } from '@mui/material'

export const Loader = (): JSX.Element => {
  return (
    <div
      className={clsx(
        'fixed top-0 z-10 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,_0,_0,_0.4)]'
      )}>
      <CircularProgress />
    </div>
  )
}
