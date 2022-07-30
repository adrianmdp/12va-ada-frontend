import { NavLink } from 'react-router-dom'
import img from './asd.png'

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
            <img src={img} alt="" />
        </nav>
    )

}

export { Nav }