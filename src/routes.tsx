import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TodoPage from '../src/pages/todoList/todo.page'
import AuthPage from '../src/pages/auth/auth.page'

export interface IRoutes {
   isAuth: boolean
}

export const useRoutes: React.FC<IRoutes> = (props) => {
   if (props.isAuth) {
      return (
         <Switch>
            <Route path="/todo" exact>
               <TodoPage />
            </Route>

            <Redirect to="/todo" />
         </Switch>
      )
   }

   return (
      <Switch>
         <Route path="/" exact>
            <AuthPage />
         </Route>

         <Redirect to="/" />
      </Switch>
   )
}
