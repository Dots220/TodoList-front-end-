import TodoItem from '../TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { selectTodo } from '../../redux/features/todo/todoSlice'
import { useAppSelector } from '../../redux/hooks/hooks'

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
   const todos = useAppSelector(selectTodo)

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
            index={index}
            handleClose={() => setModal(false)}
         />

         {todos.map((elem, index) => (
            <TodoItem
               editElem={() => {
                  showModal()
                  setModalInp(elem.text)
                  setIndex(index)
               }}
               key={elem.text + index}
               checked={elem.checked}
               text={elem.text}
               index={elem.id}
            />
         ))}
      </div>
   )
}

export default TodoList
