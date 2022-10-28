import React from 'react'
import { ModalProps } from 'interfaces'
import { RootState } from 'store'
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

export const PopUpModal: React.FC<ModalProps> = ({ open, handleClose }): JSX.Element => {
  const { modal } = useSelector((state: RootState) => state.ui)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}>
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20rem',
            backgroundColor: '#FFFFFF',
            border: `2px solid ${modal.error ? '#f44336' : '#3f50b5'}`,
            boxShadow: 24,
            p: 4
          }}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            className={clsx([modal.error ? 'text-[#f44336]' : 'text-[#3f50b5]'])}>
            {modal.title}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {modal.description}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  )
}
