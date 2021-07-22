import TodoItem from '../../components/TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const TodoList = ({ todos, deleteFunc, editFunc }) => {
   const [modal, setModal] = useState(false)
   const [index, setIndex] = useState(0)
   const [modalInp, setModalInp] = useState('')

   const showModal = () => {
      setModal(true)
   }

   return (
      <div className={classes.root}>
         <Modal
            inpChange={(event) => setModalInp(event.target.value)}
            inpValue={modalInp}
            todos={todos}
            index={index}
            open={modal}
            editFunc={(value) => editFunc(index, value)}
            handleClose={() => setModal(false)}
         />

         {todos?.map((elem, index) => (
            <TodoItem
               editElem={() => {
                  showModal()
                  setModalInp(elem.text)
                  setIndex(index)
                  editFunc(index)
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
