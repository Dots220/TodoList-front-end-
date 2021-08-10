import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'
import { Todo, User } from '../../../core/types/todo.type'
import ApiServices from '../../../service/ApiService'

export const fetchRegisterUser = createAsyncThunk(
   'users/fetchByIdStatus',
   async (user: User, thunkAPI) => {
      const response = await ApiServices.registration(user)
      return response
   }
)

const usersSlice = createSlice({
   name: 'auth',
   initialState: { token: '' },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
         state.token = action.payload
         console.log(action.payload)
      })
   },
})

// const todoSlice = createSlice({
//    name: 'todos',
//    initialState,
//    reducers: {
//
//       registration(action) {
//          ApiServices.Registration()
//          LocalStorageService.setTodos(state.todos)
//       },
//
//
//       deleteTodo(state: todoState, action) {
//          state.todos = state.todos.filter(
//             (todo, index) => index !== action.payload.index
//          )
//          LocalStorageService.setTodos(state.todos)
//       },
//       checkedTodo(state: todoState, action) {
//          state.todos = state.todos.map((todo, index) => {
//             if (index === action.payload.index) {
//                return { ...todo, checked: !todo.checked }
//             }
//             return todo
//          })
//          LocalStorageService.setTodos(state.todos)
//       },
//       editTodo(state: todoState, action) {
//          state.todos = state.todos.map((todo, index) => {
//             if (index === action.payload.index) {
//                return { ...todo, text: action.payload.inpValue }
//             }
//             return todo
//          })
//          LocalStorageService.setTodos(state.todos)
//       },
//    },
// })
