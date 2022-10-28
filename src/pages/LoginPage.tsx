import React from 'react'
import { useAuth } from 'hooks'
import { Button, TextField, Typography } from '@mui/material'
import { Field, FieldProps, Form, Formik } from 'formik'

export const LoginPage = (): JSX.Element => {
  const { signIn } = useAuth()
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values)
        signIn({ email: values.email, password: values.password, returnSecureToken: true }).then()
      }}>
      {() => (
        <Form className="w-[25rem] h-min flex flex-col gap-4">
          <Typography variant="h4">Login</Typography>
          <Field name="email">
            {({ field }: FieldProps<{ email: string }>) => (
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                autoFocus
                {...field}
              />
            )}
          </Field>
          <Field name="password">
            {({ field }: FieldProps<{ password: string }>) => (
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                autoFocus
                {...field}
              />
            )}
          </Field>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
