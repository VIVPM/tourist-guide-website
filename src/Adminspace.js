import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Admin from './Admin'
import './Adminspace.css'
const Addplace = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== "guru" || password !== "test") {
      <h2>Wrong User name or password</h2>
      navigate("/");
    } else {
      navigate("/Admin")
    }
  };
  return (
    <div className="full">
      <h1>Add a new place</h1>
      <form onSubmit={handleSubmit}>
        <label className="Heading">Enter username of Admin</label>
        <br /><br /><br/>
        <input className="inputBox"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <br /><br /><br />
        <label className="Heading">Enter Admin password</label>
        <br /><br /><br />
        <input className="inputBox"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <br /><br /><br />
        <button className="btn" type="submit">submit</button>
        <br /><br />
      </form>
    </div>
  );
};
export default Addplace;