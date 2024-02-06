import { useState } from "react";
import "./Userform.css";

const Userform = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [review, setReview] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, pass, phone, review };
    const responce = await fetch("/api/places/adduser/hello", {
      method: "POST",
      body: JSON.stringify(user),
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
      setPhone("");
      setPass("");
      setError(null);
    }

    //console.log("form submitted succussfully")
  };

  return (
    <div className="login-box">
      <h2>Add a new User</h2>
      <form className="create" onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>User Name</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />

          <label>Password</label>
        </div>

        <div class="user-box">
          <input
            type="number"
            placeholder="Phone Number"
            onChange={(e) => {
              setPhone(e.target.value);
              e.target.value.length != 10 ? setErr(true) : setErr(false);
              // console.log(err);
            }}
            value={phone}
          />
          {err ? <span>Phone Number should be of 10 digits</span> : " "}
          <label>Phone number</label>
        </div>
        <div class="user-box">
          <textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            placeholder="add review"
          ></textarea>
          <label>Review</label>
        </div>
        <button disabled={err} className="submit" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Userform;
