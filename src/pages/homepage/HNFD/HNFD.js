import React from "react";
import "./HNFD.css";
// import { FcComboChart } from "react-icons/fc";

const wrapData = [
  {
    title: 'Heatmap',
    desc: 'Understand the market movements at commodity level'
  },
  {
    title: 'N-Charts',
    desc: 'Explore the feature-rich charting tool with live/delayed quotes, reports, circulars and best of the class analytical tools.'
  },
  {
    title: 'FPOs',
    desc: 'Transforming lives of farmers. Read on to know more.'
  },
  {
    title: 'Datafeed',
    desc: 'Stream Live Futures and Options market data from NCDEX and capitalize on the opportunities as they unfold.'
  },
]

function Testi() {
  return (
    <div id="hnfd" className="mt-5">
      <div className="col-md-6">
        <div className="cardContainer row d-flex justify-content-center align-items-center">
        {wrapData.map((item, i) => (
          <div key={i} className="wrapCard col-md-6 row my-5">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
        </div>
      </div>
      <div className="col-md-6 hnfd-img-con">
        <img src="https://ncdex.com/public/images/img.jpg" alt="" className='hnfd-img' />
      </div>
    </div>
  );
}

export default Testi;
