import { FC, ReactNode } from "react"

type Props = {
    text: string
    handleClick: () => void
}

const Button: FC<Props> = ({ text, handleClick }) => {

    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )

}

export { Button }
