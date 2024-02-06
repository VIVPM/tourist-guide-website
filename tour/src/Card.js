import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Card1 from "./Card1";
import Header from "./Header";
import './card1Css.css'
function KitchenSinkExample(props) {
  const places = props.places;
  console.log(places);

  const setPlace = (item) => {
    localStorage.setItem("place", JSON.stringify(item));
  };

  return (
    <div className="placelist">
      <h1></h1>
     <br />
      {places.map((place) => (
        <div key={place.id}>
          <Card style={{ width: "18rem", border: "black" }}>
           
            <Card.Body>
              <Card.Title>{place.Name}</Card.Title>
            </Card.Body>
            {/* <Card.Text>{place.desc}</Card.Text> */}
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{place.Location}</ListGroup.Item>
            </ListGroup>
          
            <Card.Body>
              <button onClick={() => setPlace(place)}>
                <Link className="button-55" to="/det">Explore more</Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default KitchenSinkExample;
