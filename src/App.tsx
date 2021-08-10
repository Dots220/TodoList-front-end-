import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'

function App() {
   const bool = true
   const router = useRoutes({ isAuth: true })
   return <BrowserRouter>{router}</BrowserRouter>
}

export default App
