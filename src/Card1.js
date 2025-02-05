import { useState } from "react";
// import Header from "./Header";
import "./Card1.css";
import Addreview from "./Addreview";
const CardDetails = () => {
  const getItem = () => {
    return localStorage.getItem("place")
      ? JSON.parse(localStorage.getItem("place"))
      : null;
  };

  const [data] = useState(getItem);

  return (
  <div className="card1">
    <h1 className="name">{data.Name}</h1>
    <h2 className="desc">{data.Desc}</h2>
    <h2 className="desc">{data.Location}</h2>
    <h2 className="desc">{data.Time}</h2>
    <h2 className="desc">{data.Review}</h2>

    <Addreview />
  </div>
);
};

export default CardDetails;
