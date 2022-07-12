import { FC, ReactNode } from "react"
import { Inhabitant } from "../../types"
import "./style.scss"

type Props = {
    children: ReactNode
    title?: string | ReactNode
    footer?: string | ReactNode
}

const Card: FC<Props> = ({children, title, footer}) => {

    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                {footer}
            </div>
        </div>
    )

}

export { Card }