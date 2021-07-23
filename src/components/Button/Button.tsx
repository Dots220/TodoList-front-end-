import classes from './Button.module.css'
import React from 'react'
import LocalStorageService from '../../service/LocalStorage.service'

interface ButtonProps {
   name: string
}

const Button: React.FC<ButtonProps> = (props) => {
   const some = () => {
      const value = LocalStorageService.getTodos()
   }

   return (
      <div className={classes.root}>
         <button className={classes.button}>{props.name}</button>
      </div>
   )
}

export default Button
