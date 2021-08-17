import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../core/types/todo.type'
import ApiServices from '../../../service/ApiService'
import { IAuthStore } from './auth.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'
import { fetchAddTodo, fetchDeleteTodo } from '../todo/todoSlice'

export const fetchRegisterUser = createAsyncThunk(
   'users/fetchRegisterUser',
   async (user: User, { rejectWithValue }) => {
      try {
         const response = await ApiServices.registration(user)
         return response
      } catch (err) {
         rejectWithValue(err)
      }
   }
)

export const fetchLoginUser = createAsyncThunk(
   'users/fetchLoginUser',
   async (user: User, thunkAPI) => {
      const response = await ApiServices.Login(user)
      return response
   }
)

const initialState: IAuthStore = {
   authStatus: LocalStorageService.getAuthStatus(),
   status: null,
   token: LocalStorageService.getToken() || null,
}

export const logout = (state: IAuthStore) => {
   state.authStatus = false
   state.token = ''
   LocalStorageService.setToken(state.token)
   LocalStorageService.setAuthStatus(state.authStatus)
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      // logout(state: IAuthStore, action) {
      //    state.authStatus = false
      //    state.token = ''
      //    LocalStorageService.setToken(state.token)
      //    LocalStorageService.setAuthStatus(state.authStatus)
      // },
   },

   extraReducers: (builder) => {
      builder.addCase(
         fetchRegisterUser.fulfilled,
         (state: IAuthStore, action: any) => {
            LocalStorageService.setToken(action.payload.token)
            state.token = action.payload.token
            state.authStatus = true
            LocalStorageService.setAuthStatus(true)
         }
      )

      builder.addCase(
         fetchRegisterUser.rejected,
         (state: IAuthStore, action: any) => {
            LocalStorageService.setToken(action.payload.token)
            state.token = action.payload.token
            state.authStatus = true
            LocalStorageService.setAuthStatus(true)
         }
      )

      builder.addCase(fetchLoginUser.fulfilled, (state, action: any) => {
         LocalStorageService.setToken(action.payload.token)
         state.token = action.payload.token
         state.authStatus = true
         LocalStorageService.setAuthStatus(true)
      })

      builder.addCase(fetchAddTodo.rejected, (state, action: any) => {
         logout(state)
         console.log('reject from authslice')
      })

      builder.addCase(fetchDeleteTodo.rejected, (state, action: any) => {
         logout(state)
      })
   },
})
const authReducer = authSlice.reducer
export default authReducer

export const selectAuthStatus = (state: RootState) => state.auth.authStatus
