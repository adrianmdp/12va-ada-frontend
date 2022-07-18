import { Button, Card } from "../../components"
import { inhabitants } from '../../data'

// 1 Quiero que se muestre una card por cada inhabitant
// 2 Quiero que la card tenga como titulo, el nombre del inhabitant en la cabecera
// 3 Quiero que en el body de cada card se muestre una lista con las caracteristicas
//   inhabitant
// 4 Quiero que las cards tengan un boton que permita cambiar el estado del inhabitant
//   de activo a inactivo o de inactivo a activo.

const Home = () => {

    return(
        <>
            <header>Esta es la cabecera de la pagina</header>
            <main>
                { inhabitants.map(({age, name, hair_color, height, weight}) => {
                    return (
                        <Card title={name}>
                            <>
                                <ul>
                                    <li>Edad: {age}</li>
                                    <li>Color de pelo: {hair_color}</li>
                                    <li>Altura: {height}</li>
                                    <li>Peso: {weight}</li>
                                </ul>
                            </>
                        </Card>
                    )
                }) }
            </main>

            <footer>Este es el footer de la pagina</footer>
        </>

    )

}

export { Home }

























