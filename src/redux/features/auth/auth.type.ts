export interface IAuthStore {
   authStatus: boolean
   token: string | null
   status: 'pending' | 'error' | 'success' | null
}
