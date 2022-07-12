import { useState } from "react";
import { AddTeam } from "./components";
import { TableTeams } from "./components/TableTeams";
import { teams } from '../../data'
import { Team } from "../../types";

const Teams = () => {

    const [equipos, setEquipos] = useState(teams)

    return(
        <div className="page dashboard">
            Pagina Teams

            <AddTeam />

            <TableTeams teams={equipos} />
        </div>
    )
}

export { Teams }