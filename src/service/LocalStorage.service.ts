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

   static setToken(token: string) {
      let tokenLocal = JSON.stringify(token)
      localStorage.setItem('token', tokenLocal)
   }

   static getToken(): string {
      const token = localStorage.getItem('token')

      if (token) {
         return JSON.parse(token)
      }
      return ''
   }
}

export default LocalStorageService
