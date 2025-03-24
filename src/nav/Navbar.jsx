import { Link } from "react-router-dom";
import "./Navbar.css"

export const NavBar = () => {
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to='/games'>Games</Link>
        </li>
        <li className="navbar-item">
            <Link to='/exercises'>Exercises</Link>
        </li>
        <li className="navbar-item">
            <Link to='/formats'>Formats</Link>
        </li>
        <li className="navbar-item">
            <Link to='/saved'>Saved</Link>
        </li>
        <li className="navbar-item">
            <Link to='/login'>Login</Link>
        </li>
    </ul>
}