import React, { useState } from 'react'
import { SkillsComponent } from 'components'
import { useAuth } from 'hooks'
import { Skills } from 'interfaces'
import { Button, TextField, Typography } from '@mui/material'
import { Field, FieldProps, Form, Formik } from 'formik'

export const SignUpPage = (): JSX.Element => {
  const { signUp } = useAuth()
  const [skills, setSkills] = useState<Skills[]>([])

  return (
    <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName: '', position: '' }}
      onSubmit={(values) => {
        console.log(values)
        signUp(
          { email: values.email, password: values.password, returnSecureToken: true },
          {
            firstName: values.firstName,
            lastName: values.lastName,
            position: values.position,
            skills
          }
        ).then()
      }}>
      {() => (
        <Form className="w-[60rem] h-min flex flex-wrap justify-between">
          <div className="basis-[48%]">
            <Typography variant="h4">Register</Typography>
            <Field name="position">
              {({ field }: FieldProps<{ position: string }>) => (
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Position"
                  autoFocus
                  {...field}
                />
              )}
            </Field>
            <Field name="firstName">
              {({ field }: FieldProps<{ firstName: string }>) => (
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="First name"
                  autoFocus
                  {...field}
                />
              )}
            </Field>
            <Field name="lastName">
              {({ field }: FieldProps<{ firstName: string }>) => (
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Last name"
                  autoFocus
                  {...field}
                />
              )}
            </Field>
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
          </div>
          <div className="basis-[48%] flex flex-col gap-[1.6rem]">
            <SkillsComponent skills={skills} setSkills={setSkills} />
          </div>
          <Button variant="contained" type="submit" className="w-[10rem]">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
