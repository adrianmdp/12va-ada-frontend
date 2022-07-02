import { FC } from 'react'
import { Card } from '../../components/Card'

type Props = {
    data: any[]
    className: string
    title: string
}

const Home: FC<Props> = ({data, className, title}) => {

    return (

        <div className={className}>
            <h1>{title}</h1>
            
            <br />

            {data.map(elem => {
                return (
                    <>
                        <Card className="card-job">
                            <ul>
                                <li>Nombre: {elem.name}</li>
                                <li>Ubicación: {elem.location}</li>
                                <li>Seniority: {elem.seniority}</li>
                            </ul>
                        </Card>
                        <hr />
                    </>
                )
            })}

        
            <br />

            <ul>
                {data.map(elem => {
                    return (
                        <li>{elem.location}</li>
                    )
                })}
            </ul>

        </div>

    )

}

export { Home };