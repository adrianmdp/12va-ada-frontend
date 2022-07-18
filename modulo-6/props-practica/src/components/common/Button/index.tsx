import { FC, ReactNode } from "react"

type Props = {
    text: string
    prueba: () => void
}

const Button: FC<Props> = ({ text, prueba }) => {

    return(
        <button onClick={prueba}>
            {text}
        </button>
    )

}

export { Button }
