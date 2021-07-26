import classes from './App.module.css'
import TodoList from '../containers/TodoList/TodoList'
import { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { Button } from '@material-ui/core'
import LocalStorageService from '../service/LocalStorage.service'
import React from 'react'
import { Todo } from '../core/types/todo.type'
import { useAppDispatch } from '../redux/hooks/hooks'
import { addTodo } from '../redux/features/todo/todoSlice'

function App() {
   const dispatch = useAppDispatch()

   const [todos, setTodos] = useState<Todo[]>(LocalStorageService.getTodos())
   const [value, setValue] = useState<string>('')

   useEffect(() => LocalStorageService.setTodos(todos), [todos])

   const checkedFun = (index: number) => {
      setTodos((prevState: Todo[]) =>
         prevState.map((elem: Todo, todoId: number) => {
            if (todoId === index) {
               return { ...elem, checked: !elem.checked }
            }

            return elem
         })
      )
   }

   const deleteFun = (index: number) => {
      let arr = todos.concat()
      arr.splice(index, 1)
      setTodos(arr)
   }

   const editFun = (index: number, value: string) => {
      setTodos((prevState) =>
         prevState.map((elem, todoId) =>
            todoId === index ? { ...elem, text: value } : elem
         )
      )
   }

   const addToDo = () => {
      dispatch(addTodo(value))
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
