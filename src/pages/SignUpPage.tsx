import React from 'react'
import { FormObserver, Input, SkillsComponent } from 'components'
import { RegisterValidationSchema } from 'helpers'
import { useAuth } from 'hooks'
import { SignUpFormType } from 'interfaces'
import { Alert, Button, Typography } from '@mui/material'
import { ErrorMessage, Form, Formik } from 'formik'

export const SignUpPage = (): JSX.Element => {
  const { signUp } = useAuth()
  const initialValues: SignUpFormType = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    position: '',
    skills: []
  }
  // const [skills, setSkills] = useState<Skills[]>([])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
        signUp(
          { email: values.email, password: values.password, returnSecureToken: true },
          {
            firstName: values.firstName,
            lastName: values.lastName,
            position: values.position,
            skills: values.skills
          }
        ).then()
      }}
      validationSchema={RegisterValidationSchema}>
      {({ values, errors, touched }) => (
        <Form className="w-[60rem] h-min flex flex-wrap justify-between pt-6">
          <FormObserver />
          <div className="basis-[48%]">
            <Typography variant="h4">Register</Typography>

            <Input
              name="position"
              label="Position"
              type="text"
              error={touched.position && !!errors.position}
            />

            <Input
              name="firstName"
              label="First name"
              type="text"
              error={touched.firstName && !!errors.firstName}
            />

            <Input
              name="lastName"
              label="Last name"
              type="text"
              error={touched.lastName && !!errors.lastName}
            />

            <Input
              name="email"
              label="Email"
              type="email"
              error={touched.email && !!errors.email}
            />

            <Input
              name="password"
              label="Password"
              type="password"
              error={touched.password && !!errors.password}
            />
          </div>
          <div className="basis-[48%] flex flex-col gap-[1.6rem]">
            <SkillsComponent values={values} errors={errors} touched={touched} showTitle />
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
  )
}
