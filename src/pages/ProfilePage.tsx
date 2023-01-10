import React, { useEffect } from 'react'
import { useAuth } from 'hooks'
import { Skills } from 'interfaces'
import { RootState } from 'store'
import { Avatar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export const ProfilePage = (): JSX.Element => {
  const { firstName, lastName, position, avatar, skills } = useSelector(
    (state: RootState) => state.user
  )

  const { getUserInfo } = useAuth()
  useEffect(() => {
    getUserInfo().then()
  }, [])

  return (
    <div className="flex w-[75rem] h-full">
      <div className="flex flex-col justify-center items-center gap-6 basis-[50%] p-6">
        <Avatar alt="User profile pic" src={avatar as string} />
        <div className="flex justify-between w-[60%] gap-[6rem]">
          <Typography
            variant="h4"
            className="!text-[18px] !font-bold"
            onClick={() => {
              console.log(
                (skills as Skills[]).map((skill) => {
                  return Object.values({ ...skill })[2]
                })
              )
            }}>
            First name
          </Typography>
          <Typography variant="h4" className="!text-[18px]">
            {firstName}
          </Typography>
        </div>
        <div className="flex justify-between w-[60%] gap-[6rem]">
          <Typography variant="h4" className="!text-[18px] !font-bold">
            Last name
          </Typography>
          <Typography variant="h4" className="!text-[18px]">
            {lastName}
          </Typography>
        </div>
        <div className="flex justify-between w-[60%] gap-[6rem]">
          <Typography variant="h4" className="!text-[18px] !font-bold">
            Position
          </Typography>
          <Typography variant="h4" className="!text-[18px]">
            {position}
          </Typography>
        </div>
      </div>
      <div className="flex justify-center items-center basis-[50%]">
        <div className="w-[30rem] h-[30rem]">
          <Radar
            data={{
              labels:
                skills &&
                (skills as Skills[]).map((skill) => {
                  return Object.values({ ...skill })[1]
                }),
              datasets: [
                {
                  label: 'Skills',
                  data:
                    skills &&
                    (skills as Skills[]).map((skill) => {
                      return Number(Object.values({ ...skill })[0])
                    }),
                  backgroundColor: 'rgba(25, 118, 210, 0.2)',
                  borderColor: 'rgba(25, 118, 210, 1)',
                  borderWidth: 1
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}
