import classes from './App.module.css'
import TodoList from '../containers/TodoList/TodoList'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { Button, Modal } from '@material-ui/core'

function App() {
   const [todos, setTodos] = useState([])
   const [value, setValue] = useState('')
   const [showModal, setShowModal] = useState(false)

   function funSetValue(inValue) {
      setValue((prevValue) => {
         return (prevValue = inValue)
      })
   }

   const deleteFun = (index) => {
      let arr = todos.concat()
      arr.splice(index, 1)
      setTodos(arr)
   }

   const editFun = (index) => {
      setTodos((prevState) =>
         prevState.map((elem, todoId) =>
            todoId === index ? { ...elem, value } : elem
         )
      )
   }

   const addToDo = () => {
      setTodos((prevState) => [
         ...prevState,
         {
            text: value,
         },
      ])
      setValue('')
   }

   return (
      <div className={classes.root}>
         <TodoList
            todos={todos}
            deleteFunc={deleteFun}
            editFunc={() => setShowModal(true)}
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
