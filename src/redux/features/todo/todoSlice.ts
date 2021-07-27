import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../../core/types/todo.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'

interface todoState {
   todos: Todo[]
}

const initialState: todoState = {
   todos: LocalStorageService.getTodos(),
} as todoState

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTodo(state: todoState, action) {
         state.todos.push({
            text: action.payload,
            checked: false,
         })
         LocalStorageService.setTodos(state.todos)
      },
      deleteTodo(state: todoState, action) {
         console.log(action.payload.index)
         state.todos = state.todos.filter((todo, index) => index !== action.payload.index);
         LocalStorageService.setTodos(state.todos)

      },
      checkedTodo(state: todoState, action){
         state.todos = state.todos.map((todo, index) => {
            if (index === action.payload.index){
               return { ...todo, checked: !todo.checked }
            }
            return todo
         })
         LocalStorageService.setTodos(state.todos)
      },
      editTodo(state: todoState, action){
         state.todos = state.todos.map((todo, index) => {
            if (index === action.payload.index){
               return { ...todo, text: action.payload.inpValue }
            }
            return todo
         })
         LocalStorageService.setTodos(state.todos)
      }
   },
})

export const { addTodo, deleteTodo,  checkedTodo, editTodo } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer
