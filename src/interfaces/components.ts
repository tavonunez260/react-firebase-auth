import React from 'react'
import { FieldArrayRenderProps, FormikErrors, FormikTouched } from 'formik'

export interface ModalProps {
  open: boolean
  handleClose: () => void
  title?: string
  description?: string
}

export interface Skills {
  name: string
  level: number
  id: number
}

export interface SkillsProps {
  // skills: Skills[]
  // setSkills: React.Dispatch<React.SetStateAction<Skills[]>>
  values: SignUpFormType | SettingsUserInfoType
  errors: FormikErrors<SignUpFormType | SettingsUserInfoType>
  touched: FormikTouched<SignUpFormType | SettingsUserInfoType>
  showTitle?: boolean
}

export interface SKillProps {
  index: number
  skill: Skills
  removeSkill: (id: number, index: number, arrayHelpers: FieldArrayRenderProps) => void
  editSkill: (skill: Skills, index: number, arrayHelpers: FieldArrayRenderProps) => void
  arrayHelpers: FieldArrayRenderProps
}

export type SignUpFormType = {
  email: string
  password: string
  firstName: string
  lastName: string
  position: string
  skills: Skills[]
}

export type SettingsUserInfoType = {
  firstName: string
  lastName: string
  position: string
  skills: Skills[]
}

export interface InputProps {
  name: string
}

export interface LoaderProps {
  show: boolean
}
