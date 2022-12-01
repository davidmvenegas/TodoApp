export interface IUser {
    email: string
    password: string
    isLoggedIn: boolean
}
export interface ILoginRequest {
    email: string
    password: string
}