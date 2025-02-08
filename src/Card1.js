// import { useState } from "react";
// // import Header from "./Header";
// import "./Card1.css";
// import Addreview from "./Addreview";
// const CardDetails = () => {
//   const getItem = () => {
//     return localStorage.getItem("place")
//       ? JSON.parse(localStorage.getItem("place"))
//       : null;
//   };

//   const [data] = useState(getItem);

//   return (
//   <div className="card1">
//     <h1 className="name">{data.Name}</h1>
//     <h2 className="desc">{data.Desc}</h2>
//     <h2 className="desc">{data.Location}</h2>
//     <h2 className="desc">{data.Time}</h2>
//       {data.Review && data.Review.length > 0 ? (
//         data.Review.map((review, index) => (
//           <div key={index} className="review-box">
//             <h2 className="desc">Review: {review}</h2>
//             <h2 className="desc">Rating: {data.Rating[index] || "No rating provided"}</h2>
//           </div>
//         ))
//       ) : (
//         <h2 className="desc">No reviews available.</h2>
//       )}


//     <Addreview />
//   </div>
// );
// };

// export default CardDetails;
import { useEffect, useState } from "react";
import "./Card1.css";
import Addreview from "./Addreview";

const CardDetails = () => {
  // Get place data from localStorage
  const getItem = () => {
    return localStorage.getItem("place")
      ? JSON.parse(localStorage.getItem("place"))
      : null;
  };

  const placeData = getItem();
  const placeName = placeData ? placeData.Name : null;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch place data from the backend using placeName
  useEffect(() => {
    const fetchPlaceData = async () => {
      if (!placeName) {
        setError("No place name found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://tourist-guide-website.onrender.com/api/places/getoneplace/${placeName}`);
        if (!response.ok) {
          throw new Error("Failed to fetch place data");
        }
        const placeData = await response.json();
        setData(placeData);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceData();
  }, [placeName]);

  if (loading) return <h2 className="desc">Loading...</h2>;
  if (error) return <h2 className="desc">Error: {error}</h2>;
  if (!data) return <h2 className="desc">No data available.</h2>;

  return (
    <div className="card1">
      <h1 className="name">{data.Name}</h1>
      <h2 className="desc">{data.Desc}</h2>
      <h2 className="desc">{data.Location}</h2>
      <h2 className="desc">{data.Time}</h2>

      {data.Review && data.Review.length > 0 ? (
        data.Review.map((review, index) => (
          <div key={index} className="review-box">
            <h2 className="desc">Review: {review}</h2>
            <h2 className="desc">Rating: {data.Rating[index] || "No rating provided"}/5</h2>
          </div>
        ))
      ) : (
        <h2 className="desc">No reviews available.</h2>
      )}

      <Addreview />
    </div>
  );
};

export default CardDetails;
