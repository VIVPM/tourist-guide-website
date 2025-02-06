// import { Link } from "react-router-dom";
// import './Admin.css'
// const Admin=()=>{
    
//     return(
//         <div>
//             <div className="form">
//                 <Link className="link" to='/Addplace'>Add a new place</Link>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <Link className="link" to='/Deleteplace'>Delete a place</Link>
//             </div>
//         </div>
//     )
// }
// export default Admin;


import { useState } from "react";
import './Admin.css';

const Admin = () => {
    const [formData, setFormData] = useState({
        placeName: "",
        actionType: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., navigate or send data
        console.log(formData); // This is where you would process form data
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="placeName">Place Name:</label>
                    <input
                        type="text"
                        id="placeName"
                        name="placeName"
                        value={formData.placeName}
                        onChange={handleChange}
                        placeholder="Enter place name"
                    />
                    <br /><br />

                    <label htmlFor="actionType">Action:</label>
                    <select
                        id="actionType"
                        name="actionType"
                        value={formData.actionType}
                        onChange={handleChange}
                    >
                        <option value="">Select action</option>
                        <option value="Add">Add a new place</option>
                        <option value="Delete">Delete a place</option>
                    </select>
                    <br /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
