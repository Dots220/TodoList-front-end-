import classes from './App.module.css'
import TodoList from '../containers/TodoList/TodoList'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { Button } from '@material-ui/core'
import React from 'react'
import { useAppDispatch } from '../redux/hooks/hooks'
import { addTodo } from '../redux/features/todo/todoSlice'

function App() {
   const dispatch = useAppDispatch()


   const [value, setValue] = useState<string>('')






   return (
      <div className={classes.root}>
         <TodoList
         />
         <div className={classes.container}>
            <div className={classes.input}>
               <TextField
                  value={value}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(event) => setValue(event.target.value)}
               />
               <Button
                  onClick={() => {
                     dispatch(addTodo(value))
                     setValue('')
                  }}
                  variant={'contained'}
                  color={'primary'}
                  className={classes.add}
               >
                  <AddBoxIcon />
               </Button>
            </div>
         </div>
      </div>
   )
}

export default App
