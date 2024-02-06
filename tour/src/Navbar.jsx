// eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink className="nav-bar-link naav" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link naav" to="/user">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link naav" to="/places">
            Places
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link naav" to="/search">
            Search places
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link naav" to="/Adminspace">
            Admin space
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link naav" to="/Temp">
            Weather API
          </NavLink>
        </li>
        {/* <li><NavLink className="nav-bar-link naav" to="/header">Add Review</NavLink></li> */}
        <li>
          <NavLink className="nav-bar-link naav" to="/dict">
            Dictionary API
          </NavLink>
        </li>
        {/* <li><NavLink className="nav-bar-link naav" to="/header">Add Review</NavLink></li> */}
      </ul>
    </div>
  );
}
export default Navbar;
