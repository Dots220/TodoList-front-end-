import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../../core/types/todo.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { AppDispatch, RootState } from '../../store'
import ApiServices from '../../../service/ApiService'

interface todoState {
   todos: Todo[]
   // status: 'pending' | 'success' | 'error' | null
}

const initialState: todoState = {
   todos: [],
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

export const fetchEditTodo = createAsyncThunk(
   'todos/fetchEdit',
   async (
      todoProps: { index: number; text: string; checked: boolean },
      thunkAPI
   ) => {
      let todo = { text: todoProps.text, checked: todoProps.checked }
      const token = LocalStorageService.getToken()

      await ApiServices.EditTodo(token, todoProps.index, todo)
      return todoProps
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
         // logout(initialState)
      }
   }
}

export const logout = (state: todoState) => {
   LocalStorageService.removeToken()
   localStorage.removeItem('todos')
}

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      setTodos(state: todoState, action) {
         state.todos = action.payload
      },
   },

   extraReducers: (builder) => {
      builder.addCase(fetchAddTodo.fulfilled, (state, action: any) => {
         state.todos.push(action.payload)
      })

      builder.addCase(fetchDeleteTodo.fulfilled, (state, action: any) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         console.log(action.payload)
      })

      builder.addCase(fetchAddTodo.rejected, (state, action: any) => {
         logout(state)
         console.log('reject from todosice')
      })

      builder.addCase(fetchDeleteTodo.rejected, (state, action: any) => {
         logout(state)
      })

      builder.addCase(fetchEditTodo.fulfilled, (state, action: any) => {
         state.todos = state.todos.map((todo) => {
            if (todo.id === action.payload.index) {
               return {
                  ...todo,
                  text: action.payload.text,
                  checked: action.payload.checked,
               }
            }
            return todo
         })
      })

      builder.addCase(fetchEditTodo.rejected, (state, action: any) => {
         logout(state)
      })
   },
})

export const { setTodos } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer
