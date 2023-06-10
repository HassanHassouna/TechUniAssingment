export interface IUser {
    id: number
    email: string
    username: string
    password: string
    name: object
}

export type UserUpdated = Partial<IUser>
export type UserCreated = Omit<IUser, 'id'>;