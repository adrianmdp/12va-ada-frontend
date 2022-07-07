import { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
    className?: string
}

const Card: FC<Props> = ({children, className}) => {

    return (

        <div className={`card ${className}`}>

            <div className="card-header">
                Lo hacemos mas adelante
            </div>


            <div className="card-body">
                {children}
            </div>


            <div className="card-footer">
                Lo hacemos mas adelante
            </div>

        </div>

    )

}

export { Card }