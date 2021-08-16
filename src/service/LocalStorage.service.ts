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

   static removeToken() {
      localStorage.removeItem('token')
   }

   static getToken(): string {
      const token = localStorage.getItem('token')

      if (token) {
         return JSON.parse(token)
      }
      return ''
   }

   static setAuthStatus(status: boolean) {
      let statusLocal = JSON.stringify(status)
      localStorage.setItem('authStatus', statusLocal)
   }

   static getAuthStatus(): boolean {
      const authStatus = localStorage.getItem('authStatus')

      if (authStatus) {
         return JSON.parse(authStatus)
      }
      return false
   }
}

export default LocalStorageService
