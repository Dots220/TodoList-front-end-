import './TodoItem.module.css'
import classes from './TodoItem.module.css'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button, Grid } from '@material-ui/core'

const TodoItem = ({ text, deleteFunc }) => {
   return (
      <div className={classes.root}>
         <Grid className={classes.textContent}>
            <div>{text}</div>
         </Grid>

         <Button
            className={classes.delete}
            variant={'contained'}
            color={'primary'}
            onClick={deleteFunc}
         >
            <DeleteIcon />
         </Button>
      </div>
   )
}

export default TodoItem
