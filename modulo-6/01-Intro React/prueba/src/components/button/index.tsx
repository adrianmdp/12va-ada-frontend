import { FC } from "react"

type Props = {
    type: "submit" | "button" | "reset",
    id?: string,
    className?: string,
    size: "xs" | "sm" | "lg" | "xl",
    text: string
    name?: string
}

const Button: FC<Props> = ({className, id, name, size, text, type}) => {

    return(
        <button 
            id={id} 
            type={type} 
            name={name} 
            className={`${className} btn-${size}`}
        >
            {text}
        </button>
    )

}

export { Button }
