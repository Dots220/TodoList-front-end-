class LocalStorageService {
   static getTodos() {
      return JSON.parse(localStorage.getItem('todos')) || []
   }

   static setTodos(todos) {
      let todosLocal = JSON.stringify(todos)
      localStorage.setItem('todos', todosLocal)
   }
}

export default LocalStorageService
