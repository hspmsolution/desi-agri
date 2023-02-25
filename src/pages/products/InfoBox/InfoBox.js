import React from "react";
import "./InfoBox.css";
import Button from "react-bootstrap/Button";

function Flex() {
  return (
    <div className="productbody">
      <div className="productwrapper">
       
        <section className="productcols">
          <div className="productcol">
            <img src="./images/contract (1).png" alt="" className="contractone"/>
            <h3 className="Colhead">Contract Specs</h3>
            <p className="box-text">
              Get information about quality specifications, trading and delivery
              units, delivery centers etc.
            </p>
            <Button variant="outline-warning" id="TGbutton">
              Download
            </Button>
          </div>

          <div className="productcol">
          <img src="./images/product-note (1).png" alt="" className="contractone"/>
          
            <h3 className="Colhead">Product Note</h3>
            <p className="box-text">
              Information about the products, trading parameters, delivery
              procedure, clearing and settlements.
            </p>
            <Button variant="outline-warning" id="TGbutton">
              Download
            </Button>
          </div>

          <div className="productcol">
          <img src="./images/product-report (1).png" alt="" className="contractone"/>
            <h3 className="Colhead">Commodity Performance Review Report</h3>
            <p className="box-text">Get information about performance of the commodity.</p>
            <Button variant="outline-warning" id="TGbutton">
              Download
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Flex;
