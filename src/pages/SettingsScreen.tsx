import React, { useEffect } from 'react'
import { SkillsComponent } from 'components'
import { UserInfoValidationSchema } from 'helpers'
import { useAuth } from 'hooks'
import { Skills } from 'interfaces'
import { RootState } from 'store'
import { Alert, Button, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'

export const SettingsPage = (): JSX.Element => {
  const { changeEmail, changePassword, changeUserInfo } = useAuth()
  const { firstName, lastName, position, skills, email } = useSelector(
    (state: RootState) => state.user
  )
  const { isLoading } = useSelector((state: RootState) => state.ui)

  const initialEmailValue = {
    email: email as string
  }
  const initialInfoValues = {
    firstName: firstName as string,
    lastName: lastName as string,
    position: position as string,
    skills: skills as Skills[]
  }

  const { getUserInfo } = useAuth()
  useEffect(() => {
    getUserInfo().then()
  }, [])

  return (
    <div className="flex flex-col justify-start items-center w-[75rem] h-auto gap-6 p-6">
      {!isLoading && (
        <>
          <Formik
            initialValues={initialEmailValue}
            onSubmit={(values) => {
              console.log(values)
              changeEmail(values.email).then()
            }}>
            {() => (
              <Form className="w-full h-min flex flex-col flex-wrap justify-between">
                <div className="flex flex-col w-[45%]">
                  <Typography variant="h4">Change email</Typography>
                  <Field name="email">
                    {({ field }: FieldProps<{ email: string }>) => (
                      <TextField
                        {...field}
                        required
                        variant="outlined"
                        type="email"
                        margin="normal"
                        fullWidth
                        label="New email"
                      />
                    )}
                  </Field>
                </div>
                <Button variant="contained" type="submit" className="w-[10rem]">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{ password: '' }}
            onSubmit={(values) => {
              console.log(values)
            }}>
            {() => (
              <Form className="w-full h-min flex flex-col flex-wrap justify-between">
                <div className="flex flex-col w-[45%]">
                  <Typography variant="h4">Change password</Typography>
                  <Field name="password">
                    {({ field }: FieldProps<{ password: string }>) => (
                      <TextField
                        {...field}
                        required
                        variant="outlined"
                        type="password"
                        margin="normal"
                        fullWidth
                        label="New password"
                      />
                    )}
                  </Field>
                </div>
                <Button variant="contained" type="submit" className="w-[10rem]">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={initialInfoValues}
            onSubmit={(values) => {
              console.log(values)
              changeUserInfo(values).then()
            }}
            validationSchema={UserInfoValidationSchema}>
            {({ values, errors, touched }) => (
              <Form className="w-full h-min flex flex-wrap justify-between pt-6">
                <div className="basis-[48%]">
                  <Typography variant="h4">Change personal info</Typography>
                  <Field name="position">
                    {({ field }: FieldProps<{ position: string }>) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Position"
                        type="text"
                        error={touched.position && !!errors.position}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="position">
                    {(msg) => <Alert severity="error">{msg}</Alert>}
                  </ErrorMessage>

                  <Field name="firstName">
                    {({ field }: FieldProps<{ firstName: string }>) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="First name"
                        type="text"
                        error={touched.firstName && !!errors.firstName}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="firstName">
                    {(msg) => <Alert severity="error">{msg}</Alert>}
                  </ErrorMessage>

                  <Field name="lastName">
                    {({ field }: FieldProps<{ firstName: string }>) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Last name"
                        type="text"
                        error={touched.lastName && !!errors.lastName}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="lastName">
                    {(msg) => <Alert severity="error">{msg}</Alert>}
                  </ErrorMessage>
                </div>
                <div className="basis-[48%] flex flex-col gap-[1.6rem]">
                  <SkillsComponent values={values} errors={errors} touched={touched} />
                  <ErrorMessage name="skills">
                    {(msg) => <Alert severity="error">{msg}</Alert>}
                  </ErrorMessage>
                </div>
                <Button variant="contained" type="submit" className="w-[10rem] !mt-[2rem]">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  )
}
