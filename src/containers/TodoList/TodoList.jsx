import TodoItem from '../../components/TodoItem/TodoItem'
import classes from './TodoList.module.css'

const TodoList = ({ todos, deleteFunc }) => {
   return (
      <div className={classes.root}>
         {todos.map((elem, index) => (
            <TodoItem
               text={todos.name}
               deleteFunction={() => deleteFunc(index)}
            />
         ))}
      </div>
   )
}

export default TodoList
