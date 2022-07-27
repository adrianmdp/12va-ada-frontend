import { FC } from "react"
import { Team } from "../../../../types"

type Props = {
    teams: Team[]
}

const TableTeams: FC<Props> = ({teams}) => {

    return(
        <table border={1}>
            <thead>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>País</th>
            </thead>
            <tbody>

                {teams.map(team => {
                    return (
                        <tr>
                            <td>{team.name}</td>
                            <td>{team.city}</td>
                            <td>{team.country}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

export { TableTeams }