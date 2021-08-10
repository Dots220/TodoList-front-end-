import axios from 'axios'
import { User } from '../core/types/todo.type'

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

   Login(body: { email: string; password: string }): Promise<string> {
      return axios.post(`${this._apiUrl}/auth/login`, body).then((res) => {
         return res.data
      })
   }
}
export default new ApiServices()
