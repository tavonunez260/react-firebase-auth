import React from 'react'
import { useAuth } from 'hooks'
import { Button, TextField, Typography } from '@mui/material'
import { Field, FieldProps, Form, Formik } from 'formik'

export const SettingsPage = (): JSX.Element => {
  const { changePassword } = useAuth()
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col justify-start items-center gap-6 basis-[50%] p-6">
        <Formik
          initialValues={{ password: '' }}
          onSubmit={(values) => {
            console.log(values)
            changePassword(values.password).then()
          }}>
          {() => (
            <Form className="w-full h-min flex flex-wrap justify-between">
              <Typography variant="h4">Change password</Typography>
              <Field name="password">
                {({ field }: FieldProps<{ password: string }>) => (
                  <TextField
                    required
                    variant="outlined"
                    type="password"
                    margin="normal"
                    fullWidth
                    label="New password"
                    autoFocus
                    {...field}
                  />
                )}
              </Field>
              <Button variant="contained" type="submit" className="w-[10rem]">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex justify-center items-center basis-[50%]"></div>
    </div>
  )
}
