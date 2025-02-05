import { useState } from "react";
import './Addplace.css';

const Deleteplace = () => {
    const [place, setPlace] = useState("");  // Fix: Use an empty string
    const [error, setError] = useState("");  // Fix: Properly store errors

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Deleting place:", place);

        try {
            const response = await fetch(`https://tourist-guide-website.onrender.com/api/places/deleteoneplace/${place}`, {
                method: 'DELETE'
            });

            const text = await response.text(); // Read response as text

            if (!response.ok) {
                setError(text); // Display error
                console.error("Error:", text);
            } else {
                console.log("Success:", text);
                setPlace(""); // Clear input field
                setError(""); // Clear error message
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to connect to the server.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br /><br /><br />
                <label className="Heading">Enter name of the place to be deleted</label>
                <br /><br /><br /><br />
                <input
                    className="inputBox"
                    type="text"
                    onChange={(e) => setPlace(e.target.value)}
                    value={place}
                />
                <br /><br /><br />
                <button className="btn" type="submit">Submit</button>
                {error && <p className="error">{error}</p>}  {/* Display error messages */}
                <br /><br /><br /><br /><br /><br />
            </form>
        </div>
    );
};

export default Deleteplace;
