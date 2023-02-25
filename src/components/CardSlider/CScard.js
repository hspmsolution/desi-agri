// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CScard.css"

function BasicCard({item}) {
  return (
    <>
    <div>
      <Card id="CH"
      style={{
        width: 300,
        height: 180,
        border: "white",
        backgroundColor: "#ede6e6",
        color: "black",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      {/* <Card.Body>
        <Card.Title id="ce"> {item.id}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the...
        </Card.Text> */}
        {/* <Button variant="primary" id="ce">Go somewhere</Button> */}
      {/* </Card.Body> */}
    </Card>
    </div>

     
     </>
  );
}
export default BasicCard;
