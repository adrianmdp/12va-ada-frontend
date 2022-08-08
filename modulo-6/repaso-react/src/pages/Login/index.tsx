import { useEffect, useState } from "react"
import { Layout } from "../../components"

const Login = () => {

    const [temp, setTemp] = useState(0)
    const [temp2, setTemp2] = useState(0)

    /**
     * fn -> sería una arrow function anónima
     * [] -> sería un array de dependencias
     */
    useEffect(() => {
        console.log('Test 2')
    }, [temp, temp2])
    
    return(
        <Layout hideNav page="login">
            Login

            <br />

            <h2>{temp}</h2>
            <h2>{temp2}</h2>
            <button onClick={() => setTemp(prevState => prevState + 1)}>Prueba</button>
            <button onClick={() => setTemp2(prevState => prevState + 1)}>Prueba2</button>
        </Layout>
    )

}

export { Login }