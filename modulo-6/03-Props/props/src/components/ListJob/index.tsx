import { FC } from "react"

type Props = {
    job: any
}

const ListJob: FC<Props> = ({job}) => {

    return(
        <ul>
            <li>Nombre: {job.name}</li>
            <li>Ubicación: {job.location}</li>
            <li>Seniority: {job.seniority}</li>
        </ul>
    )

}

export { ListJob }