import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'

export const FormObserver: React.FC = () => {
  const { values } = useFormikContext()
  useEffect(() => {
    console.log(values)
  }, [values])
  return null
}
