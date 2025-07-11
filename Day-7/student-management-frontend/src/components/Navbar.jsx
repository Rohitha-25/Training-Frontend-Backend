import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Student</Link></li>
                <li><Link to="/edit">Edit Student</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;