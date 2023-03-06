import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'
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
    </Card>
    </div>

     
     </>
  );
}

BasicCard.propTypes = {
  item: PropTypes.object
}

export default BasicCard;
