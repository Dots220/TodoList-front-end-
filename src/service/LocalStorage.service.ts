interface Todo {
   text: string
   checked: boolean
}

class LocalStorageService {
   static getTodos(): Todo[] {
      const todosStr = localStorage.getItem('todos')

      if (todosStr) {
         return JSON.parse(todosStr)
      }

      return []
   }

   static setTodos(todos: object) {
      let todosLocal = JSON.stringify(todos)
      localStorage.setItem('todos', todosLocal)
   }
}

export default LocalStorageService
