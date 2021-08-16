import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../../core/types/todo.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { AppDispatch, RootState } from '../../store'
import ApiServices from '../../../service/ApiService'
import { fetchLoginUser } from '../auth/auth.slice'
import axios from 'axios'

interface todoState {
   todos: Todo[]
   // status: 'pending' | 'success' | 'error' | null
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

export const getUserTodos = () => {
   return async (dispatch: AppDispatch) => {
      try {
         const response = await ApiServices.getTodos()
         if (response.error && response.error === 'Unauthorized') {
            throw new Error(response.error)
         } else {
            dispatch(setTodos(response))
         }
      } catch (err) {
         // dispatch(fetchLoginUser({ email, password }))
         dispatch(logout())
      }
   }
}

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      logout(state: todoState) {
         LocalStorageService.removeToken()
         localStorage.removeItem('todos')
         state.todos = []
         console.log('Logout')
      },
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
      setTodos(state: todoState, action) {
         state.todos = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchAddTodo.fulfilled, (state, action: any) => {
         state.todos.push(action.payload)
         LocalStorageService.setTodos(state.todos)
      })

      // builder.addCase(logout, (state, action: any) => {
      //    state.todos = []
      //    LocalStorageService.setTodos(state.todos)
      // })

      builder.addCase(fetchAddTodo.rejected, (state, action: any) => {
         console.log('Error')
         logout()
      })

      builder.addCase(fetchDeleteTodo.fulfilled, (state, action: any) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         console.log(action.payload)
         LocalStorageService.setTodos(state.todos)
      })
   },
})

export const { checkedTodo, editTodo, logout, setTodos } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer
