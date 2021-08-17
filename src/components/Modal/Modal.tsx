import { Button, Modal, TextField } from '@material-ui/core'
import * as React from 'react'
import classes from './Modal.module.css'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { fetchEditTodo } from '../../redux/features/todo/todoSlice'
import apiService from '../../service/ApiService'

interface ModalWindowPar {
   open: boolean
   handleClose: any
   inpChange: (event: any) => void
   inpValue: string
   checked: boolean
   index: number
}
const ModalWindow: React.FC<ModalWindowPar> = ({
   open,
   handleClose,
   inpChange,
   inpValue,
   checked,
   index,
}) => {
   const dispatch = useAppDispatch()

   return (
      <Modal open={open} className={classes.root}>
         <div className={classes.container}>
            <div onClick={handleClose}>X</div>
            <TextField
               variant={'outlined'}
               label={'New input value'}
               color={'secondary'}
               value={inpValue}
               onChange={inpChange}
            />
            <Button
               variant={'contained'}
               onClick={() => {
                  dispatch(fetchEditTodo({ index, text: inpValue, checked }))
                  handleClose()
               }}
            >
               Edit
            </Button>
         </div>
      </Modal>
   )
}

export default ModalWindow
