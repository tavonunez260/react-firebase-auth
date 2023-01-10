import React from 'react'
import { InputProps } from 'interfaces'
import { Alert, TextField, TextFieldProps } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

export const Input: React.FC<TextFieldProps & InputProps> = ({ name, ...props }) => {
  return (
    <>
      <Field name={name}>
        {({ field }: { field: any }) => (
          <TextField {...field} {...props} variant="outlined" margin="normal" fullWidth />
        )}
      </Field>
      <ErrorMessage name={name}>{(msg) => <Alert severity="error">{msg}</Alert>}</ErrorMessage>
    </>
  )
}
