import { FC, ReactNode } from "react"

type Props = {
    text: string
    handleClick: (s: string, n: number, b: boolean) => void
}

const Button: FC<Props> = ({ text, handleClick }) => {


    

    return(
        <button onClick={() => handleClick('hola', 123, false)}>
            {text}
        </button>
    )

}

export { Button }
