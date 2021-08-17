import TodoItem from '../TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { getUserTodos, selectTodo } from '../../redux/features/todo/todoSlice'
import { useAppSelector } from '../../redux/hooks/hooks'
import { useDispatch } from 'react-redux'

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
   const todos = useAppSelector(selectTodo)
   const completedTodos = todos.filter((todo) => todo.checked == true)
   const uncompletedTodos = todos.filter((todo) => todo.checked == false)
   const dispatch = useDispatch()

   const getTodos = () => {
      dispatch(getUserTodos())
   }

   useEffect(() => {
      getTodos()
   }, [])

   const [modal, setModal] = useState(false)
   const [index, setIndex] = useState(0)
   const [modalInp, setModalInp] = useState('')
   const [checked, setChecked] = useState(false)

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
            checked={checked}
            handleClose={() => setModal(false)}
         />

         {todos.map((elem, index) => (
            <TodoItem
               editElem={() => {
                  showModal()
                  setModalInp(elem.text)
                  setIndex(elem.id)
                  setChecked(elem.checked)
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
