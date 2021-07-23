import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import classes from './TodoItem.module.css'
import { Button, ButtonProps, Checkbox } from '@material-ui/core'
import React from 'react'

interface TodoItemProps {
   text: string
   deleteFunction: () => void
   editElem: () => void
   checkedFunction: () => void
   checked: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({
   text,
   deleteFunction,
   editElem,
   checkedFunction,
   checked,
}) => {
   return (
      <div className={classes.root}>
         <Checkbox
            className={classes.checkBox}
            color="primary"
            onClick={() => {
               console.log('some')
               checkedFunction()
            }}
            checked={checked}
         />

         <div className={classes.text}>{text}</div>

         <div>
            <Button className={classes.edit} onClick={editElem}>
               <CreateIcon />
            </Button>

            <Button className={classes.delete} onClick={deleteFunction}>
               <DeleteIcon fontSize={'medium'} />
            </Button>
         </div>
      </div>
   )
}

export default TodoItem
