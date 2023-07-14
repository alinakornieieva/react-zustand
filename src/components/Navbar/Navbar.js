import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return <div className="navbar">
        <NavLink style={({ isActive }) => {
            return {
                color: isActive ? "black" : "",
            };
        }} to='/'>All</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                color: isActive ? "black" : "",
            };
        }} to='/selected'>Selected</NavLink>
    </div>
}

export default Navbar