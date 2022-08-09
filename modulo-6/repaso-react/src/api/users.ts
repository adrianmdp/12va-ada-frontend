import { mapToArray } from "../helpers"
import { UserPayload } from "../types"


const add = (user: UserPayload) => {

    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(user)
    }
    
    fetch('https://ava-9f390-default-rtdb.firebaseio.com/users.json', options)
 
}

const getAll = async (search: string) => {
    const response = await fetch(
        `https://ava-9f390-default-rtdb.firebaseio.com/users.json?find=${search}`
    );
    const data = await response.json()

    return mapToArray(data);
}

const remove = () => {

}

const update = () => {

}

export const usersApi = { add, getAll, remove, update }