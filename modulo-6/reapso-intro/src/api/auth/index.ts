
type Payload = {
    email: string
    pass: string
}

const login = async (payload: Payload) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(payload)
    }

    const response = await fetch('loginEndpoint', options)
    const data = await response.json()
    return data;

}

const signUp = () => {

}

const recoverPassword = () => {

}

const verifyAccount = () => {

}

export const AuthApi = { login, signUp, recoverPassword, verifyAccount }
