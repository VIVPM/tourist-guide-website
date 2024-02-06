import Deleteuser from "./Deleteuser";
const userdetails = ({ user }) => {
  
  const handleClick = async () => {
    const p = prompt("Enter your password");
    if (p != "" && p != user.Password) {
      alert("please enter the correct password");
    } else {
      const responce = await fetch("/api/places/" + user.Name, {
        method: "DELETE",
      });
      const json = await responce.json();
      if (responce.ok) {
        alert("user has deleted. please refresh the page");
      }
    }
  };

  return (
    <div className="user-details">
      <div>
        Name :<h2>{user.Name}</h2>
        Review:<h2>{user.Review}</h2>
       <button onClick={handleClick}>Delete</button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
     
    </div>
  );
};

export default userdetails;
