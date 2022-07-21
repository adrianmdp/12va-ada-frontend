import { FC } from "react"

type Props = {
    pepe: () => void
}

const Prueba: FC<Props> = ({ pepe }) => {

    return (
        <div>
            Este componete es de prueba <br />

            <span onClick={pepe}>Esto es clickable</span>
        </div>
    )

}

export { Prueba }