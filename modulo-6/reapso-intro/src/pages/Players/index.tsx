import { FC, useState } from "react";
import { Card } from "../../components";
import { inhabitants } from "../../data";

import "./style.scss"

const Players: FC = () => {

    const [titulo, setTitulo] = useState<string>()

    return (
        <div className="page players">

            <button onClick={() => setTitulo("Este es el nuevo título")}>Cambiar título</button>
            
            <ol className="list">
                {
                    inhabitants.map(({name, thumbnail, age, hair_color}) => {
                        return (
                            <Card 
                                title={titulo}
                                footer={<button>Borrar</button>}
                            >
                                <img src={thumbnail} height="100" alt={name} />
                                <ul>
                                    <li>Edad: {age}</li>
                                    <li>Color de pelo: {hair_color}</li>
                                </ul>
                            </Card>
                        )
                    })
                }
            </ol>

        </div>
    )

}

export { Players }