import classes from './Button.module.css'

const Button = (props) => {
   return (
      <div className={classes.root}>
         <button className={classes.button}>{props.name}</button>
      </div>
   )
}

export default Button
