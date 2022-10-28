import React from 'react'

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
  skills: Skills[]
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>
}
