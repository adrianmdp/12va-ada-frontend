import { FC, ReactNode, useState } from "react"
import { Button } from "../Button"
import "./styles.scss"

type Props = {
    children: ReactNode
    title?: string
}

const Card: FC<Props> = ({ children, title }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`card${isActive ? ' active' : ''}`}>
            { title && (
                <div className="card-header">
                    {title}
                </div>
            )}

            <div className="card-body">
                {children}
            </div>

            <div className="card-footer">
                <Button 
                    text={ isActive ? 'Desactivar' : 'Activar' } 
                    onClick={() => { 
                        setIsActive(prevState => !prevState)
                    }} />
            </div>
        </div>
    )

}

export { Card }