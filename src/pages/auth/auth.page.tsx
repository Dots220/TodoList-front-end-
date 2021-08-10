import React, { useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import classes from './auth.module.css'
import { fetchRegisterUser } from '../../redux/features/auth/auth'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { User } from '../../core/types/todo.type'

export const AuthPage = () => {
   const [password, setPassword] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const dispatch = useAppDispatch()

   const Registration = (user: User) => {
      dispatch(fetchRegisterUser(User))
   }

   return (
      <div className={classes.root}>
         <div className={classes.card}>
            <Typography variant={'h5'}>Авторизация</Typography>

            <TextField
               variant={'outlined'}
               label="Email"
               onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
               variant={'outlined'}
               label="Пароль"
               onChange={(event) => setPassword(event.target.value)}
            />

            <div className={classes.buttonContainer}>
               <Button variant="contained" onClick={}>
                  Регистрация
               </Button>
               <Button variant="contained">Войти</Button>
            </div>
         </div>
      </div>
   )
}

export default AuthPage
