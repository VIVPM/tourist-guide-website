import "./Addreview.css";
import React from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Userform from "./Userform";
import { useNavigate } from "react-router-dom";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const Addreview = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [review, setReview] = useState("");
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = async () => {
    const user = { place, review };
    //console.log(place);

    const responce = await fetch("/api/places/" + name, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await responce.json();
    console.log(json);
    if (json.matchedCount == 0) {
      alert("no such user exists");
    }
    if (responce.ok) {
      setName("");
      setPlace("");
      setReview("");
    }
  };

  return (
    <div className="form">
      <h2 className="title">Feedback</h2>

      <div class="input-container ic1">
        <input
          id="firstname"
          class="input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">
          Enter name
        </label>
      </div>
      <div class="input-container ic1">
        <input
          id="firstname"
          class="input"
          type="text"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">
          Enter Place
        </label>
      </div>

      <div className="star">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>

      <div className="input-container ic1">
        <textarea
          onChange={(e) => setReview(e.target.value)}
          className="input"
          placeholder="Please enter your feedback about this place"
        />
      </div>

      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
      <br />
      <br />
    </div>
  );
};

export default Addreview;
