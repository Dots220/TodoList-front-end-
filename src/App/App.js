import classes from './App.module.css'
import TodoList from '../containers/TodoList/TodoList'
import { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function App() {
   const [todos, setTodos] = useState([])

   const deleteFunc = (id) => {
      const copyTodos = todos.concat()
      copyTodos.splice(id, 1)
      setTodos(copyTodos)
   }

   const addTodo = () => {
      setTodos((prevState) => [
         ...prevState,
         {
            text: inpValue,
         },
      ])

      setInpValue('')
   }

   const [inpValue, setInpValue] = useState('')

   return (
      <div className={classes.root}>
         <TodoList todos={todos} deleteFunc={deleteFunc} />

         <h1>{inpValue || 'None'}</h1>

         <TextField
            label={'New todo'}
            variant="outlined"
            value={inpValue}
            onChange={(event) => setInpValue(event.target.value)}
         />

         <Button onClick={addTodo} variant={'contained'} color={'primary'}>
            Add
         </Button>
      </div>
   )
}

export default App
