export type User = {
    id: string
    name: string
    email: string
}

export type UserPayload = Omit<User, 'id'> & { pass: string }