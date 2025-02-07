// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "./Addreview.css";

// const colors = {
//   orange: "#FFBA5A",
//   grey: "#a9a9a9",
// };

// const Addreview = () => {
//   // State for controlling modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // Form states
//   const [name, setName] = useState("");
//   const [place, setPlace] = useState("");
//   const [review, setReview] = useState("");
//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   // State for storing all submitted reviews
//   const [reviewsList, setReviewsList] = useState([]);
//   // Array for rendering star icons
//   const stars = Array(5).fill(0);

//   // Star rating event handlers
//   const handleClick = (value) => {
//     setCurrentValue(value);
//   };

//   const handleMouseOver = (value) => {
//     setHoverValue(value);
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined);
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const reviewData = {
//       name,
//       place,
//       review,
//       rating: currentValue,
//     };

//     const response = await fetch(`https://tourist-guide-website.onrender.com/api/places/${name}`, { // name should be user name here
//       method: "POST",
//       body: JSON.stringify({
//         place,
//         review,
//         rating: currentValue,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });


//     // const json = await response.json();
//     if (response.ok) {
//       // Update reviews list with the new review added
//       setReviewsList([...reviewsList, reviewData]);

//       // Reset fields
//       setName("");
//       setPlace("");
//       setReview("");
//       setCurrentValue(0);
//       setHoverValue(undefined);

//       // Close the modal
//       setIsModalOpen(false);
//     }

//   };


//   return (
//     <div className="add-review-container">
//       {/* Button to open the modal popup */}
//       <button
//         className="open-modal-button"
//         onClick={() => setIsModalOpen(true)}
//       >
//         Add Review
//       </button>

//       {/* Modal Popup */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button
//               className="close-button"
//               onClick={() => setIsModalOpen(false)}
//             >
//               &times;
//             </button>
//             <h2>Submit Your Review</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="input-container">
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <input
//                   type="text"
//                   placeholder="Enter Place"
//                   onChange={(e) => setPlace(e.target.value)}
//                   value={place}
//                   required
//                 />
//               </div>
//               <div className="star">
//                 {stars.map((_, index) => {
//                   return (
//                     <FaStar
//                       key={index}
//                       size={24}
//                       style={{ marginRight: 10, cursor: "pointer" }}
//                       color={
//                         (hoverValue || currentValue) > index
//                           ? colors.orange
//                           : colors.grey
//                       }
//                       onClick={() => handleClick(index + 1)}
//                       onMouseOver={() => handleMouseOver(index + 1)}
//                       onMouseLeave={handleMouseLeave}
//                     />
//                   );
//                 })}
//               </div>
//               <div className="input-container">
//                 <textarea
//                   placeholder="Enter your review"
//                   onChange={(e) => setReview(e.target.value)}
//                   value={review}
//                   required
//                 />
//               </div>
//               <button type="submit" className="submit-button">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Display list of reviews */}
//       <div className="reviews-section">
//         <h3>Reviews:</h3>
//         {reviewsList.length > 0 ? (
//           reviewsList.map((rev, index) => (
//             <div key={index} className="review-box">
//               <p>
//                 <strong>Name:</strong> {rev.name}
//               </p>
//               <p>
//                 <strong>Place:</strong> {rev.place}
//               </p>
//               <p>
//                 <strong>Rating:</strong> {rev.rating} / 5
//               </p>
//               <div className="star">
//                 {Array(5)
//                   .fill(0)
//                   .map((_, i) => (
//                     <FaStar
//                       key={i}
//                       size={20}
//                       color={rev.rating > i ? colors.orange : colors.grey}
//                     />
//                   ))}
//               </div>
//               <p>
//                 <strong>Review:</strong> {rev.review}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Addreview;


import React, { useState} from "react";
import { FaStar } from "react-icons/fa";
import "./Addreview.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Addreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [review, setReview] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviewsList, setReviewsList] = useState([]);

  const stars = Array(5).fill(0);

  const handleClick = (value) => setCurrentValue(value);
  const handleMouseOver = (value) => setHoverValue(value);
  const handleMouseLeave = () => setHoverValue(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = { name, place, review, rating: currentValue };

    const response = await fetch(`https://tourist-guide-website.onrender.com/api/places/${name}`, {
      method: "POST",
      body: JSON.stringify({ place,review, rating: currentValue }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setReviewsList([...reviewsList, reviewData]); // Update UI
      setName("");
      setReview("");
      setCurrentValue(0);
      setHoverValue(undefined);
      setIsModalOpen(false);

      // Show success alert
      alert("Review added successfully!");
    } else {
      alert("Failed to add review. Please try again.");
    }
  };

  return (
    <div className="add-review-container">
      <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
        Add Review
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Submit Your Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Enter Place" onChange={(e) => setPlace(e.target.value)} value={place} required />
              </div>
              <div className="star"> Rating: &nbsp;
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    style={{ marginRight: 10, cursor: "pointer" }}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
              <div className="input-container">
                <textarea placeholder="Enter your review" onChange={(e) => setReview(e.target.value)} value={review} required />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* <div className="reviews-section">
        <h3>Reviews for {reviewsList.place}:</h3>
        {reviewsList.length > 0 ? (
          reviewsList.map((rev, index) => (
            <div key={index} className="review-box">
              <p><strong>Name:</strong> {rev.name}</p>
              <p><strong>Rating:</strong> {rev.rating} / 5</p>
              <div className="star">
                {Array(5).fill(0).map((_, i) => (
                  <FaStar key={i} size={20} color={rev.rating > i ? colors.orange : colors.grey} />
                ))}
              </div>
              <p><strong>Review:</strong> {rev.review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div> */}
    </div>
  );
};

export default Addreview;
