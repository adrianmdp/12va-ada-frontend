import { useEffect, useState } from "react"
import { usersApi } from "../../api"
import { Layout } from "../../components"
import { User } from "../../types"

const Users = () => {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')

    const [temp, setTemp] = useState(0)

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const rsp = await usersApi.getAll()
    //         if(users.length === 0)
    //             setUsers(rsp)
    //     }
    //     getUsers()
    // }, [])

    useEffect(() => { 
        usersApi.getAll(search)
            .then(resp => setUsers(resp))
            .catch(err => setError(err))

    }, [search])

    return (
        <Layout page="users">
            <form action="">
                <label htmlFor="">Buscar</label>
                <input 
                    type="text" 
                    name="text" 
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {error}

            <h1>{temp}</h1>
            <button onClick={() => setTemp(prevState => prevState + 1)}>Prueba</button>
        </Layout>
    )

}

export { Users }