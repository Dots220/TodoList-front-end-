import { Button, Modal, TextField } from '@material-ui/core'
import { useState } from 'react'
import * as React from 'react'
import classes from './Modal.module.css'

const ModalWindow = ({ index, open, handleClose, todos }) => {
   const [inpValue, setInpValue] = useState('')

   return (
      <Modal open={open} className={classes.root}>
         <div className={classes.container}>
            <div onClick={handleClose}>X</div>
            <TextField
               variant={'outlined'}
               label={'New input value'}
               color={'secondary'}
               value={inpValue}
               onChange={(event) => setInpValue(event.target.value)}
            />
            <Button
               variant={'contained'}
               onClick={() => {
                  todos[index].text = inpValue
                  setInpValue('')
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
