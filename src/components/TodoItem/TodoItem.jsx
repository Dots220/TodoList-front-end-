import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import classes from './TodoItem.module.css'
import { Button } from '@material-ui/core'

const TodoItem = ({ text, deleteFunction }) => {
   return (
      <div className={classes.root}>
         <input className={classes.checkBox} type="checkbox" />

         <div className={classes.text}>{text}</div>

         <div>
            <Button className={classes.edit}>
               <CreateIcon />
            </Button>

            <Button className={classes.delete} onClick={deleteFunction}>
               <DeleteIcon fontSize={'medium'} />
            </Button>
         </div>
      </div>
   )
}

export default TodoItem
