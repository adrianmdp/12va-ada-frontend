import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { User } from "../../types";

const Detail = () => {

    const params = useParams()

    const [user, setUser] = useState<User>()

    const cargarUser = () => {
        fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/users/${params.id}.json`)
            .then(response => response.json())
            .then(data => setUser(data));
    }

    return(
        <div className="page user-detail">

            <h1>Detalle del usuario con ID: {params.pepe}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam eaque. Similique laudantium, magni laborum quidem et nemo molestiae quibusdam?</p>

            <p>User: {JSON.stringify(user)}</p>

            <button onClick={cargarUser}>Cargar Usuario</button>

            {user && 
                <ul>
                    <li>Nombre: { user.name }</li>
                    <li>Email: { user.email }</li>
                </ul>
            }
            
            
        </div>
    )

}

export { Detail }