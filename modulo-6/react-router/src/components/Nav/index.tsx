import { NavLink } from 'react-router-dom'

const Nav = () => {

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/categories">Categories</NavLink>
                </li>
            </ul>
        </nav>
    )

}

export { Nav }