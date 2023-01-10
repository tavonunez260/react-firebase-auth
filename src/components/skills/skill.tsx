import React, { useState } from 'react'
import { SKillProps } from 'interfaces'
import { IconButton, TextField } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'

export const SkillComponent: React.FC<SKillProps> = ({
  editSkill,
  removeSkill,
  skill,
  index,
  arrayHelpers
}) => {
  const [skillToEdit, setSkillToEdit] = useState(skill.name)
  const [levelToEdit, setLevelToEdit] = useState(skill.level.toString())
  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="flex justify-start gap-2" key={skill.id}>
      <TextField
        id={`skill${index}`}
        label="Skill"
        className="w-[50%]"
        type="text"
        value={skillToEdit}
        onChange={(event) => setSkillToEdit(event.target.value)}
        InputProps={{
          readOnly: isEdit
        }}
      />
      <TextField
        id={`level${index}`}
        label="Level"
        type="number"
        className="w-[28%]"
        value={levelToEdit}
        onChange={(event) => setLevelToEdit(event.target.value)}
        InputProps={{
          readOnly: isEdit
        }}
      />
      <IconButton
        color="primary"
        component="label"
        onClick={() => {
          removeSkill(skill.id, index, arrayHelpers)
        }}>
        <RemoveIcon />
      </IconButton>
      <IconButton
        color="primary"
        component="label"
        onClick={() => {
          if (!isEdit) {
            editSkill(
              { ...skill, name: skillToEdit, level: parseInt(levelToEdit) },
              index,
              arrayHelpers
            )
          }
          setIsEdit(!isEdit)
        }}
        disabled={!isEdit ? skillToEdit === '' || levelToEdit === '' : false}>
        {isEdit ? <EditIcon /> : <SaveIcon />}
      </IconButton>
    </div>
  )
}
