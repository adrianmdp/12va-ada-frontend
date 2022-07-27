import { useState } from "react"

const Dashboard = () => {

    // Estructura de un estado
    const [num, setNum] = useState(0)
    const [name, setName] = useState<string>()


    const ranking = [
        { name: "Equipo 1", city: "Mar del Plata", country: "Argentina" },
        { name: "Equipo 2", city: "Capital", country: "Argentina" },
        { name: "Equipo 3", city: "Bogotá", country: "Colombia" }
    ]

    const goleadores = [

    ]

    const amonestados = [

    ]

    const expulsados = [

    ]

    const sumar = () => {
        setNum(prevState => prevState + 1);
        setName("Hola mundo");
    }

    return(
        <>
            <h1>{num}</h1>
            <h1>{name}</h1>
            <button onClick={sumar}>Sumar</button>
            <table>

            </table>

            <table>

            </table>
        </>
    )

}

export { Dashboard }