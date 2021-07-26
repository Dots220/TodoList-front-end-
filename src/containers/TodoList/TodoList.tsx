import TodoItem from '../../components/TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { Todo } from '../../core/types/todo.type'

interface TodoListProps {
   todos: Todo[]
   deleteFunc: (index: number) => void
   editFunc: (index: number, value: string) => void
   checkedFunc: (index: number) => void
}

const TodoList: React.FC<TodoListProps> = ({
   todos,
   deleteFunc,
   editFunc,
   checkedFunc,
}) => {
   const [modal, setModal] = useState(false)
   const [index, setIndex] = useState(0)
   const [modalInp, setModalInp] = useState('')

   const showModal = () => {
      setModal(true)
   }

   return (
      <div className={classes.root}>
         <Modal
            inpChange={(event: any) => setModalInp(event.target.value)}
            inpValue={modalInp}
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
               }}
               key={elem.text + index}
               checked={elem.checked}
               text={elem.text}
               deleteFunction={() => deleteFunc(index)}
               checkedFunction={() => {
                  checkedFunc(index)
               }}
            />
         ))}
      </div>
   )
}

export default TodoList
