import TodoList from '../containers/TodoList/TodoList'
import { useState } from 'react'

function App() {
   const [todos, setTodos] = useState([])

   const deleteFun = (index) => {
      let arr = todos.concat()
      arr.splice(index, 1)
      setTodos(arr)
   }

   const editFun = (index, value) => {
      let arr = todos.concat()
      arr[index] = { ...arr[index], text: value }
   }

   return <TodoList />
}

export default App
