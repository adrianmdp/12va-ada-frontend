import { Outlet } from "react-router"

const List = () => {

    return(
        <div className="page users">
            <h1>Usuarios</h1>

            <Outlet />
        </div>
    )

}

export { List }