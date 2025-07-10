import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Student</Link>
            <Link to="/edit">Edit Student</Link>
            <Link to="/search">Search</Link>
        </nav>
    );
};

export default Navbar;