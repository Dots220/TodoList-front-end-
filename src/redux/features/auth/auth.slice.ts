import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../core/types/todo.type'
import ApiServices from '../../../service/ApiService'
import { IAuthStore } from './auth.type'
import LocalStorageService from '../../../service/LocalStorage.service'
import { RootState } from '../../store'

export const fetchRegisterUser = createAsyncThunk(
   'users/fetchRegisterUser',
   async (user: User, thunkAPI) => {
      const response = await ApiServices.registration(user)
      return response
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

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
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

      builder.addCase(fetchRegisterUser.pending, (state, action) => {})

      builder.addCase(fetchLoginUser.fulfilled, (state, action: any) => {
         LocalStorageService.setToken(action.payload.token)
         state.token = action.payload.token
         state.authStatus = true
         LocalStorageService.setAuthStatus(true)
      })
   },
})

const authReducer = authSlice.reducer
export default authReducer

export const selectAuthStatus = (state: RootState) => state.auth.authStatus
