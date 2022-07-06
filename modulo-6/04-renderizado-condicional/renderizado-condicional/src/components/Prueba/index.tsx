import { FC } from "react"

import './style.css';

type Props = {
    name?: string
    email?: string
}

const Prueba: FC<Props>  = ({ name, email }) => {

    return (
        <>
            
            Nombre: {name || "No hay dato." }   

            Nombre: {name ? name : "No hay dato." }   
            
            {/* {
                name === "Adrián" && email === "adrian@ada.com" && (
                    <div>
                        Esto es verdadero
                    </div>
                )
            } */}

            {
                name === "Adrián" || email === "adrian@ada.com" || (
                    <div>
                        Esto es verdadero
                    </div>
                )
            }
        </>
    )

}

export { Prueba }