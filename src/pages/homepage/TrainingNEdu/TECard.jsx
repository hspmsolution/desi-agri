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
        backgroundColor: "white",
        color: "rgba(255, 255, 255, 0.5)",
        
      }}
    >
     <Card.Img variant="top" src={item.image} />
      <Card.Body id="Maincontent">
        <Card.Title id="Ename"> {item.event_name}</Card.Title>
      </Card.Body>
    </Card>


     
     </>
  );
}

export default BasicCard;
