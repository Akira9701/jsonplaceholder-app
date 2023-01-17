import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <ul className="flex">
                <li ><NavLink to='/' className={({ isActive }) => (isActive ? 'text-white' : "") + " mr-2.5" } end>Home</NavLink></li>
                <li><NavLink to='/posts' className={({ isActive }) => (isActive ? 'text-white' : "") + " mr-2.5" } >Posts</NavLink></li>

            </ul>
        </nav>
     );
}
 
export default NavBar;