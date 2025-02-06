import { Link } from "react-router-dom";
import './Admin.css';

const Admin = () => {
    return (
        <div className="navbar1">
            <Link className="nav-bar-link naav1" to="/Addplace">
                Add a new place
            </Link>
            <Link className="nav-bar-link naav1" to="/Deleteplace">
                Delete a place
            </Link>
        </div>
    );
};

export default Admin;
