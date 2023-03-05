import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./GetInTouch.css";

function GetInTouch() {
  const [cards] = useState([
    {
      title: "Registered Office",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "Ackruti Corporate Park, 1st Floor, LBS Road, Kanjurmarg (West), Mumbai,Maharashtra  PIN-CODE: 400078.",
      telephone: "Tel: (+91-22) - 66406789",
    },
    {
      title: "Indore",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "4th floor, 401, Gold Arcade, Opp. Curewell Hospital, New Palasiyaroad # 1, Pent House, PIN-CODE: 452001 (MP)",
      telephone: "Tel : 0731-2549720",
    },
    {
      title: "Ahmedabad",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "502, Kaivanna Complex, Off C.G.Road, Near Panchvati Circle, Central Mall, Ambawadi,PIN-CODE: 380015",
      telephone: "Tel : 079-48966641",
    },
    {
      title: "Jaipur",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "Vinayak Heights, 5th Floor, Plot No. 105-106, Gom Defence Colony, Gautam Marg, Vaishali Nagar,PIN-CODE: 302021. Rajasthan",
      telephone: "Tel : 0141-4267200",
    },
    {
      title: "Kolkata",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "516, Krishna Building,224 - A.J.C. Bose Road, (Near Beck Bagan Crossing),Kolkata (W.B) PIN-CODE: 700017",
      telephone: "Tel : 033-44213500",
    },
    {
      title: "Hyderabad",
      NCDE: "National Commodity & Derivatives Exchange Limited",
      adress:
        "C/o NCDEX e Markets Limited,Park View Estate, 4th Floor, Banjara Hills Road No. 2, Opp KBR Park Hyderabad, PIN-CODE: 500034",
      telephone: " Tel : 033-44213500",
    }
    
  ]);

  return (
    <div>
      <Navbar />
      
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=india&t=&z=6&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
        title="gmap"
      > </iframe>
      <div id="MainSection">
        <div className="containe">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="inside-card">
                <div >
                  <h3>{card.title}</h3>
                  <p>{card.NCDE}</p>

                  <p>{card.adress}</p>
                  <p>{card.telephone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GetInTouch;
