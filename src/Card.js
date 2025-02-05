import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './card1Css.css'

function KitchenSinkExample(props) {
  const places = props.places;
  console.log(places);

  const setPlace = (item) => {
    localStorage.setItem("place", JSON.stringify(item));
  };

  return (
    <div className="placelist">
      <br />
      {places.map((place) => (
        <div key={place._id || place.Name}>  {/* Use place._id if available, else fallback to place.Name */}
          <Card style={{ width: "18rem", border: "black" }}>
            <Card.Body>
              <Card.Title>{place.Name}</Card.Title>
            </Card.Body>
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
