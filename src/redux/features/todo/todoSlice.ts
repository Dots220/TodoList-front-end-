import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo, User } from '../../../core/types/todo.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'
import ApiServices from '../../../service/ApiService'
import { IAuthStore } from '../auth/auth.type'
import { fetchLoginUser, fetchRegisterUser } from '../auth/auth.slice'

interface todoState {
   todos: Todo[]
}

const initialState: todoState = {
   todos: LocalStorageService.getTodos(),
} as todoState

export const fetchAddTodo = createAsyncThunk(
   'todos/fetchCreate',
   async (todo: { text: string; checked: boolean }, thunkAPI) => {
      const token = LocalStorageService.getToken()
      const response = await ApiServices.CreateTodo(token, todo)
      return response
   }
)

export const fetchDeleteTodo = createAsyncThunk(
   'todos/fetchDelete',
   async (index: number, thunkAPI) => {
      const token = LocalStorageService.getToken()
      const response = await ApiServices.DeleteTodo(token, index)
      return index
   }
)

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      checkedTodo(state: todoState, action) {
         state.todos = state.todos.map((todo, index) => {
            if (index === action.payload.index) {
               return { ...todo, checked: !todo.checked }
            }
            return todo
         })
         LocalStorageService.setTodos(state.todos)
      },
      editTodo(state: todoState, action) {
         state.todos = state.todos.map((todo, index) => {
            if (index === action.payload.index) {
               return { ...todo, text: action.payload.inpValue }
            }
            return todo
         })
         LocalStorageService.setTodos(state.todos)
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchAddTodo.fulfilled, (state, action: any) => {
         state.todos.push(action.payload)
         LocalStorageService.setTodos(state.todos)
      })

      builder.addCase(fetchDeleteTodo.fulfilled, (state, action: any) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         console.log(action.payload)
         LocalStorageService.setTodos(state.todos)
      })
   },
})

export const { checkedTodo, editTodo } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer
