import { useState } from "react";
import "./Addplace.css";
const Addplace = () => {
  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [desc, setDesc] = useState([]);
  const [review, setReview] = useState([]);
  const [error, setError] = useState([]);
  const [type, setType] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const place = { name, location, time, desc, review, type };
    const responce = await fetch("/api/places/addplace", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await responce.json();

    if (!responce.ok) {
      setError(json.error);
    }
    if (responce.ok) {
      setName("");
      setLocation("");
      setTime("");
      setDesc("");
      setType("");
      setReview("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="Heading">Name</label>
        <br />
        <br />
        <br />
        <br />
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <br />
        <br />
        <br />
        <label className="Heading">Enter location of the place</label>
        <br />
        <br />
        <br />
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        ></input>
        <br />
        <br />
        <br />
        <label className="Heading">Enter description</label>
        <br />
        <br />
        <br />
        <textarea
          className="inputBox"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <br />
        <br />
        <br />
        <label className="Heading">Time</label>
        <br />
        <br />
        <br />
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        ></input>
        <br />
        <br />
        <br />
        <label className="Heading">Type</label>
        <br />
        <br />
        <br />
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
        ></input>
        <br />
        <br />
        <br />
        <label className="Heading">Enter review</label>
        <br />
        <br />
        <br />
        <textarea
          className="inputBox"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
        <br />
        <br />
        <br />
        <button className="btn" type="submit">
          Submit
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Addplace;
