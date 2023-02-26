import React from "react";
import "./Member.css";

function Member() {
  return (
    <div className="Member mx-5">
      <div className="Wrap d-flex p-10">
        <img src="https://ncdex.com/public/images/trade.jpg" alt="" />
        <div className="TextA align-items-center mx-5">
          <h2 className="main-heading">TRADE WITH NCDEX. BECOME A MEMBER</h2>
          <p>
            National Commodity & Derivatives Exchange Limited (NCDEX) is a
            nation-level, technology -driven online commodity Exchange with an
            independent Board of Directors and professional management. It is
            committed to provide a world-class commodity Exchange platform for
            market participants to trade in a wide spectrum of commodity
            derivatives driven by best global practices, professionalism and
            transparency.
            <br />
          </p>

          <button type="button" className="btn btn-outline-success m-3">
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
}

export default Member;
