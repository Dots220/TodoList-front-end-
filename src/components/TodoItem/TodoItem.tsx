import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import classes from './TodoItem.module.css'
import { Button, Checkbox } from '@material-ui/core'
import React from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks'
import {
   checkedTodo,
   fetchDeleteTodo,
} from '../../redux/features/todo/todoSlice'

interface TodoItemProps {
   text: string
   editElem: () => void
   checked: boolean
   index: number
}

const TodoItem: React.FC<TodoItemProps> = ({
   text,
   editElem,
   checked,
   index,
}) => {
   const dispatch = useAppDispatch()

   return (
      <div className={classes.root}>
         <Checkbox
            className={classes.checkBox}
            color="primary"
            onClick={() => {
               dispatch(checkedTodo({ index }))
            }}
            checked={checked}
         />

         <div className={classes.text}>{text}</div>

         <div>
            <Button className={classes.edit} onClick={editElem}>
               <CreateIcon />
            </Button>

            <Button
               className={classes.delete}
               onClick={() => {
                  dispatch(fetchDeleteTodo(index))
               }}
            >
               <DeleteIcon fontSize={'medium'} />
            </Button>
         </div>
      </div>
   )
}

export default TodoItem
