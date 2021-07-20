import classes from './TodoList.module.css'
import TodoItem from '../../components/TodoItem/TodoItem'

const TodoList = ({ todos, deleteFunc }) => {
   return (
      <div className={classes.root}>
         {todos.map((elem, index) => (
            <TodoItem
               text={elem.text}
               deleteFunc={() => deleteFunc(index)}
               key={elem.text + index}
            />
         ))}
      </div>
   )
}

export default TodoList
