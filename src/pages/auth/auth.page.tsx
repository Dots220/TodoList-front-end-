import React, { useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import classes from './auth.module.css'
import {
   fetchLoginUser,
   fetchRegisterUser,
} from '../../redux/features/auth/auth.slice'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { User } from '../../core/types/todo.type'

export const AuthPage = () => {
   // const [password, setPassword] = useState<string>('')
   // const [email, setEmail] = useState<string>('')
   const [userAuth, setUserAuth] = useState<User>({ email: '', password: '' })

   const dispatch = useAppDispatch()

   const Registration = () => {
      dispatch(fetchRegisterUser(userAuth))
   }

   const Login = () => {
      dispatch(fetchLoginUser(userAuth))
   }

   const changeUser = (event: any) => {
      setUserAuth((prevState: User) => ({
         ...prevState,
         email: event.target.value,
      }))
   }

   return (
      <div className={classes.root}>
         <div className={classes.card}>
            <Typography variant={'h5'}>Авторизация</Typography>

            <TextField
               variant={'outlined'}
               label="Email"
               onChange={(event) =>
                  setUserAuth((prevState: User) => ({
                     ...prevState,
                     email: event.target.value,
                  }))
               }
            />
            <TextField
               variant={'outlined'}
               label="Пароль"
               onChange={(event) =>
                  setUserAuth((prevState: User) => ({
                     ...prevState,
                     password: event.target.value,
                  }))
               }
            />

            <div className={classes.buttonContainer}>
               <Button variant="contained" onClick={Registration}>
                  Регистрация
               </Button>
               <Button variant="contained" onClick={Login}>
                  Войти
               </Button>
            </div>
         </div>
      </div>
   )
}

export default AuthPage
