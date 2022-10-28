import React, { useState } from 'react'
import { Skills, SkillsProps } from 'interfaces'
import { IconButton, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const SkillsComponent: React.FC<SkillsProps> = ({ skills, setSkills }): JSX.Element => {
  const [formSkill, setFormSkill] = useState('')
  const [formLevel, setFormLevel] = useState('')

  const addSkill = (): void => {
    const newSkill = {
      name: formSkill,
      level: formLevel,
      id: Math.random()
    }
    setSkills([...skills, newSkill] as Skills[])
    setFormSkill('')
    setFormLevel('')
  }

  const removeSkill = (id: number): void => {
    const newSkills = skills.filter((skill) => skill.id !== id)
    setSkills(newSkills)
  }

  return (
    <>
      <Typography variant="h5">Skills</Typography>
      <div className="flex justify-between">
        <TextField
          id="outlined"
          label="Skill"
          className="w-[55%]"
          value={formSkill}
          onChange={(event) => setFormSkill(event.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          className="w-[30%]"
          value={formLevel}
          onChange={(event) => setFormLevel(event.target.value)}
        />
        <IconButton color="primary" component="label" onClick={addSkill}>
          <AddIcon />
        </IconButton>
      </div>
      {skills.map((skill) => {
        return (
          <div className="flex justify-between" key={skill.id}>
            <TextField id="outlined" label="Skill" className="w-[55%]" defaultValue={skill.name} />
            <TextField
              id="outlined-number"
              label="Level"
              className="w-[30%]"
              defaultValue={skill.level}
            />
            <IconButton
              color="primary"
              component="label"
              onClick={() => {
                removeSkill(skill.id)
              }}>
              <RemoveIcon />
            </IconButton>
          </div>
        )
      })}
    </>
  )
}
