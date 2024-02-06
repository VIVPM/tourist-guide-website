import { useState } from "react";
import { Link } from "react-router-dom";
import './Admin.css'
const Admin=()=>{
    
    return(
        <div >
            <div className="form">
                <Link className="link" to='/Addplace'>Add a new place</Link>
                <br/>
                <br/>
                <br/>
                <Link className="link" to='/Deleteplace'>Delete a place</Link>
            </div>
        </div>
    )
}
export default Admin;
