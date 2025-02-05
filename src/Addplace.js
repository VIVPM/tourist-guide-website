import { useState } from "react";
import "./Addplace.css";
const Addplace = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [review, setReview] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const place = { name, location, time, desc, review, type };

    console.log("Data being sent:", place); // Debugging output

    try {
      const response = await fetch("https://tourist-guide-website.onrender.com/api/places/addplace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place),
      });

      const json = await response.json();
      if (!response.ok) {
        console.error("Error:", json);
        return;
      }

      console.log("Place added successfully:", json);
    } catch (error) {
      console.error("Fetch error:", error);
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
