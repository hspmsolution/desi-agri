import React from "react";
import "./Gannounce.css";

function Gannounce() {
  return (
    <>
      <div className="Gannounce">
        {/* <h2>GOVERNMENT ANNOUNCEMENTS</h2> */}

        <div className="img-text-side-by-side img-box">
          <div className="img-container"> </div>
          <div className="text-container">
            <h2>GOVERNMENT ANNOUNCEMENTS</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente vero animi delectus doloremque! Ex vero provident deserunt nulla adipisci. Laudantium porro eaque esse accusantium praesentium amet quaerat quam maiores.</p> */}
            <ul>
              <li className="dateHeading">11 Jan 2023</li>
              <li>
                <a href="https://egazette.nic.in/WriteReadData/2023/241905.pdf">
                  Govt. Orders/Notifications- Govt. to discontinue import of
                  crude soybean oil under tariff rate quota (TRQ) with effect
                  from April 01, 2023 (DGFT Notification No. 50/2015-20)
                </a>
              </li>
              <li className="dateHeading">28 Dec 2022</li>
              <li>
                <a href="#">
                  Govt. Orders/Notifications- Government extended free import of
                  RBD palm oil, palmolein and Others beyond December 31, 2022
                  until further orders (DGFT Notification No. 51 /2015-2020)
                </a>
              </li>
              <li className="dateHeading">28 Dec 2022</li>
              <li>
                <a href="#">
                  Govt. Orders/Notifications- Government extended free import of
                  Urad and Tur upto March 31, 2024. (DGFT Notification no. 52
                  /2015-2020)
                </a>
              </li>
              <li className="dateHeading">18 Nov 2022</li>
              <li>
                <a href="#">
                Govt. Orders/Notifications- Removal of export duty on steel
                products and iron ore to nil w.e.f from November 19, 2022 (DGFT
                Notification No. 58/2022-Customs)
                </a>
  
              </li>
              <li className="dateHeading">02 Nov 2022</li>
              <li>
                <a href="#"> 
                Govt. Orders/Notifications- Exemption of Wholesalers and Big
                Chain retailers from the Stock Limit order for edible oils and
                oilseeds (DFPD Order No. 4870)</a>
              </li>

              <button type="button" className="btn btn-outline-success my-3">
                View More
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gannounce;