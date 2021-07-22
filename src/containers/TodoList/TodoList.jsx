import TodoItem from '../../components/TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const TodoList = ({ todos, deleteFunc }) => {
   const [modal, setModal] = useState(false)
   const [modalValue, setModalValue] = useState('')
   const [index, setIndex] = useState(0)

   const showModal = () => {
      setModal(true)
   }

   return (
      <div className={classes.root}>
         <Modal
            todos={todos}
            index={index}
            open={modal}
            handleClose={() => setModal(false)}
         />

         {todos?.map((elem, index) => (
            <TodoItem
               editElem={() => {
                  showModal()
                  setIndex(index)
               }}
               key={elem + index}
               text={elem.text}
               deleteFunction={() => deleteFunc(index)}
               checkedFunction={() => (todos[index].checked = true)}
            />
         ))}
      </div>
   )
}

export default TodoList
