import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TECard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicCard({item}) {
  return (
    <>
      <Card
      style={{
        width: 260,
        height: 250,
        // border: "3px solid rgb(49, 54, 61)",
        backgroundColor: "white",
        color: "rgba(255, 255, 255, 0.5)",
        
      }}
    >
     <Card.Img variant="top" src={item.image} />
      <Card.Body id="Maincontent">
      {/* <Card.Img variant="top" src={item.image} /> */}
        <Card.Title id="Ename"> {item.event_name}</Card.Title>
        {/* <Card.Date>{item.EDate}</Card.Date> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the...
        </Card.Text> */}
        {/* <Button variant="primary" id="KnMore">Know More</Button> */}
      </Card.Body>
    </Card>


     
     </>
  );
}

export default BasicCard;
