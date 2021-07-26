import { Button, Modal, TextField } from '@material-ui/core'
import * as React from 'react'
import classes from './Modal.module.css'

interface ModalWindowPar {
   open: boolean
   handleClose: any
   editFunc: (inpValue: string) => void
   inpChange: (event: any) => void
   inpValue: string
}
const ModalWindow: React.FC<ModalWindowPar> = ({
   open,
   handleClose,
   editFunc,
   inpChange,
   inpValue,
}) => {
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
                  editFunc(inpValue)
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
