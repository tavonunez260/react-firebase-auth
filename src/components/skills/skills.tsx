import React, { useState } from 'react'
import { Skills, SkillsProps } from 'interfaces'
import { IconButton, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { FieldArray, FieldArrayRenderProps } from 'formik'
import { SkillComponent } from './skill'

export const SkillsComponent: React.FC<SkillsProps> = ({
  values,
  errors,
  touched,
  showTitle
}): JSX.Element => {
  const [formSkill, setFormSkill] = useState('')
  const [formLevel, setFormLevel] = useState('')

  const addSkill = (arrayHelpers: FieldArrayRenderProps): void => {
    // const newSkill = {
    //   name: formSkill,
    //   level: formLevel,
    //   id: Math.random()
    // }
    // setSkills([...skills, newSkill] as Skills[])
    setFormSkill('')
    setFormLevel('')
    arrayHelpers.push({ name: formSkill, level: formLevel })
  }

  const removeSkill = (id: number, index: number, arrayHelpers: FieldArrayRenderProps): void => {
    // const newSkills = skills.filter((skill) => skill.id !== id)
    // setSkills(newSkills)
    arrayHelpers.remove(index)
  }

  const editSkill = (skill: Skills, index: number, arrayHelpers: FieldArrayRenderProps): void => {
    // const newSkills = [...skills]
    // newSkills[index] = skill
    // setSkills(newSkills)
    arrayHelpers.replace(index, { name: skill.name, level: skill.level.toString() })
  }

  return (
    <FieldArray name="skills">
      {(arrayHelpers) => (
        <>
          {showTitle ? (
            <Typography variant="h4">Skills</Typography>
          ) : (
            <div className="w-full h-[42px]" />
          )}
          <div className="flex justify-start gap-2">
            <TextField
              id="outlined"
              label="Skill"
              type="text"
              className="w-[50%]"
              value={formSkill}
              error={touched.skills && !!errors.skills}
              onChange={(event) => setFormSkill(event.target.value)}
            />
            <TextField
              id="outlined-number"
              label="Level"
              type="number"
              className="w-[28%]"
              value={formLevel}
              error={touched.skills && !!errors.skills}
              onChange={(event) => setFormLevel(event.target.value)}
            />
            <IconButton
              color="primary"
              component="label"
              onClick={() => addSkill(arrayHelpers)}
              disabled={formSkill === '' || formLevel === ''}>
              <AddIcon />
            </IconButton>
          </div>
          {values.skills?.length > 0 && <Typography variant="h5">Skills to be added</Typography>}
          {values.skills?.map((skill, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <SkillComponent
                  index={index}
                  skill={skill}
                  removeSkill={removeSkill}
                  editSkill={editSkill}
                  arrayHelpers={arrayHelpers}
                />
              </div>
            )
          })}
        </>
      )}
    </FieldArray>
  )
}
