import { useState } from "react";
const Deleteuser=(props)=>{
    const user=props.user;
    const [pass,setPass]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(pass!=user.Pass){
            <h2>Wronng password</h2>
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter name password of the user</label>
                <input type="text" onChange={(e)=>(e.target.value) } value={pass}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Deleteuser;