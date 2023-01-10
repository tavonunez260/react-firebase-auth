import * as Yup from 'yup'

export const RegisterValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  position: Yup.string().required('Position is required'),
  skills: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        level: Yup.number().required('Level field is required')
      })
    )
    .min(1, 'At least one skill is required')
})

export const UserInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  position: Yup.string().required('Position is required'),
  skills: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        level: Yup.number().required('Level field is required')
      })
    )
    .min(1, 'At least one skill is required')
})

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required')
})
