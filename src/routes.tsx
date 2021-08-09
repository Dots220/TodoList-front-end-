import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TodoPage from '../src/pages/todoList/todo.page'
import AuthPage from '../src/pages/auth/auth.page'

export interface iRoutes {
   isAuth: boolean
}

export const useRoutes = ({ isAuth }: iRoutes) => {
   if (isAuth) {
      return (
         <Switch>
            <Route path="/todo" exact>
               <TodoPage />
            </Route>

            <Route path="/" exact>
               <AuthPage />
            </Route>

            <Redirect to="/todo" />
         </Switch>
      )
      return (
         <Switch>
            <Route path="/auth" exact>
               <AuthPage />
            </Route>
         </Switch>
      )
   }
}
