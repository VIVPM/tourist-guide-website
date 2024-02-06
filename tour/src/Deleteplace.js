import { useState } from "react";
import './Addplace.css';

const Deleteplace=()=>{

    const [place,setPlace]=useState([]);
    const [error,setError]=useState('');

    const handleSubmit=async (e)=>{
        console.log("hello");
        e.preventDefault();
        console.log(place);
        const responce=await fetch("/api/places/deleteoneplace/"+place,{
            method:'DELETE'
        })
    const json = await responce.json();
        
    if (!responce.ok) {
      setError(json.error);
    }
    if (responce.ok) {
      setPlace("");
    }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <br /><br /><br />
                <label className="Heading">Enter name of the place to be deleted</label>
                <br /><br /><br /><br />
                <input className="inputBox"
          type="text"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
        ></input>
        <br /><br /><br />
                <button className="btn" type="submit">Submit</button>
                <br /><br /><br /><br /><br /><br />
            </form>
        </div>
    )
}
export default Deleteplace;