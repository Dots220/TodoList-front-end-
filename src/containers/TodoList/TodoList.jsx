import TodoItem from '../../components/TodoItem/TodoItem'
import classes from './TodoList.module.css'
import ReactDOM from 'react-dom'
import React from 'react'

const TodoList = ({ todos, deleteFunc, editFunc }) => {
   return (
      <div className={classes.root}>
         {todos?.map((elem, index) => (
            <TodoItem
               editElem={editFunc}
               key={elem + index}
               text={elem.text}
               deleteFunction={() => deleteFunc(index)}
            />
         ))}
      </div>
   )
}

export default TodoList
