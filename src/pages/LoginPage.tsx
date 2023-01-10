import React from 'react'
import { FormObserver, Input } from 'components'
import { LoginValidationSchema } from 'helpers'
import { useAuth } from 'hooks'
import { Button, Typography } from '@mui/material'
import { Form, Formik } from 'formik'

export const LoginPage = (): JSX.Element => {
  const { signIn } = useAuth()
  const initialValues = { email: '', password: '' }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
        signIn({ email: values.email, password: values.password, returnSecureToken: true }).then()
      }}
      validationSchema={LoginValidationSchema}>
      {({ touched, errors }) => (
        <Form className="w-[25rem] h-min flex flex-col gap-4 pt-6">
          <FormObserver />
          <Typography variant="h4">Login</Typography>

          <Input name="email" label="Email" type="email" error={touched.email && !!errors.email} />

          <Input
            name="password"
            label="Password"
            type="password"
            error={touched.password && !!errors.password}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
