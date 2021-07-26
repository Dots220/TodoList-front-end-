import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../../core/types/todo.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'

interface todoState {
   todos: Todo[]
}

const initialState: todoState = {
   todos: [],
} as todoState

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTodo(state: todoState, action) {
         console.log(action.payload)
         state.todos.push({
            text: action.payload,
            checked: false,
         })
      },
      deleteTodo(state: todoState, action) {
         state.todos.splice(action.payload, 1)
      },
   },
})

export const { addTodo } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer
