import { Outlet } from "react-router-dom"

const List = () => {

    return (

        <div className="page users">

            <h1>Usuarios</h1>

            <table border={1}>
                <thead>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                </thead>
                <tbody></tbody>
            </table>
        </div>

    )

}

export { List }