import { NavLink } from "react-router-dom";
import './Admin.css'
const Admin=()=>{
    
    return(
        <div>
            <div className="form">
                <NavLink className="link" to='/Addplace'>Add a new place</NavLink>
                <br/>
                <br/>
                <br/>
                <NavLink className="link" to='/Deleteplace'>Delete a place</NavLink>
            </div>
        </div>
    )
}
export default Admin;
