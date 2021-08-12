import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAppSelector } from './redux/hooks/hooks'
import { selectAuthStatus } from './redux/features/auth/auth.slice'

function App() {
   const isAuth = useAppSelector(selectAuthStatus)

   const router = useRoutes({ isAuth })
   return <BrowserRouter>{router}</BrowserRouter>
}

export default App
