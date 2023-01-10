import React from 'react'
import { LoaderProps } from 'interfaces'
import { CircularProgress } from '@mui/material'
import clsx from 'clsx'

export const Loader: React.FC<LoaderProps> = ({ show }): JSX.Element => {
  return (
    <>
      {show && (
        <div
          className={clsx(
            'fixed top-0 z-10 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,_0,_0,_0.4)]'
          )}
          role="loader">
          <CircularProgress />
        </div>
      )}
    </>
  )
}
