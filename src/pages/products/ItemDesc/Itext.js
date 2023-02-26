import './Itext.css'
import React from 'react';
import { toLower } from 'lodash';

function Itext(productName, productDescription) {
   

  return (
    <div className="chana-container">
      <div className="wrapper">
        <div className="chana-img" >
        <img src={`./images/${toLower(productName)}.jpg`} alt="" />
          <h4>{productName}</h4>
        </div>
        <div id="chana-text">
          <p>
            {productDescription}
          </p>
        </div>
        {/* <div className="Accordion-links">
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
        </div> */}
      </div>
    </div>
  );
}

export default Itext;
