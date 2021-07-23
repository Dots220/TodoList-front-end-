import classes from './App.module.css'
import TodoList from '../containers/TodoList/TodoList'
import { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { Button } from '@material-ui/core'
import LocalStorageService from '../service/LocalStorage.service'

function App() {
   const [todos, setTodos] = useState(LocalStorageService.getTodos())
   const [value, setValue] = useState('')

   useEffect(() => LocalStorageService.setTodos(todos), [todos])

   const checkedFun = (index, value) => {
      setTodos((prevState) =>
         prevState.map((elem, todoId) =>
            todoId === index ? { ...elem, checked: value } : elem
         )
      )
   }

   const deleteFun = (index) => {
      let arr = todos.concat()
      arr.splice(index, 1)
      setTodos(arr)
   }

   const editFun = (index, value) => {
      setTodos((prevState) =>
         prevState.map((elem, todoId) =>
            todoId === index ? { ...elem, text: value } : elem
         )
      )
   }

   const addToDo = () => {
      setTodos((prevState) => [
         ...prevState,
         {
            text: value,
            checked: false,
         },
      ])
      setValue('')
   }

   return (
      <div className={classes.root}>
         <TodoList
            todos={todos}
            deleteFunc={deleteFun}
            editFunc={editFun}
            checkedFunc={checkedFun}
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
                  onClick={addToDo}
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
