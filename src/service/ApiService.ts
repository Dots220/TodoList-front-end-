import axios from 'axios'
import LocalStorageService from './LocalStorage.service'

class ApiServices {
   _apiUrl = 'http://localhost:5000'

   public async registration(body: {
      email: string
      password: string
   }): Promise<string> {
      return axios
         .post(`${this._apiUrl}/auth/registration`, body)
         .then((res) => {
            return res.data
         })
   }

   public async Login(body: {
      email: string
      password: string
   }): Promise<string> {
      return axios.post(`${this._apiUrl}/auth/login`, body).then((res) => {
         return res.data
      })
   }

   public async CreateTodo(
      token: string,
      body: {
         text: string
         checked: boolean
      }
   ): Promise<object> {
      return axios
         .post(`${this._apiUrl}/todo`, body, {
            headers: {
               token,
            },
         })
         .then((res) => {
            return res.data
         })
   }

   public async DeleteTodo(token: string, index: number): Promise<any> {
      return axios
         .delete(`${this._apiUrl}/todo/${index}`, {
            headers: {
               token,
            },
         })
         .then((res) => {
            return res.data
         })
   }

   public async getTodos() {
      return axios
         .get(`${this._apiUrl}/todo`, {
            headers: {
               token: LocalStorageService.getToken(),
            },
         })
         .then((res) => {
            return res.data
         })
   }
}
export default new ApiServices()
