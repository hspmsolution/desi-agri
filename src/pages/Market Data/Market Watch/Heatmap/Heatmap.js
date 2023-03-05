import React, { useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import "./Heatmap.css";

function Heatmap() {
  const [cards] = useState([
    {
      title: "JEERAUNJHA",
      date: "20Mar2023",
      amount: "30340.00",
      percentageChange: "1.81 %",
      background: "black",
    },
    {
      title: "TMCFGRNZM",
      date: "18Apr2023",
      amount: "7144.00",
      percentageChange: "1.25 %",
      background: "black",
    },
    {
      title: "STEEL",
      date: "20Mar2023",
      amount: "49670.00",
      percentageChange: "0.73 %",
      background: "black",
    },
    {
      title: "DHANIYA",
      date: "20M1r2023",
      amount: "6920.00",
      percentageChange: "0.44 %",
      background: "black",
    },
    {
      title: "GUARSEED10",
      date: "20Mar2023",
      amount: "5952.00",
      percentageChange: "0.37 %",
      background: "black",
    },
    {
      title: "GUARGUM5",
      date: "20Mar2023",
      amount: "12624.00",
      percentageChange: "0.32 %",
      background: "black",
    },
    {
      title: "CASTOR",
      date: "20Mar2023",
      amount: "6686.00",
      percentageChange: "0.00 %",
      background: "black",
    },
    {
      title: "KAPAS",
      date: "20Mar2023",
      amount: "1612.00",
      percentageChange: "-0.03 %",
      background: "black",
    },
    {
      title: "COCUDAKL",
      date: "20Mar2023",
      amount: "2688.00",
      percentageChange: "-0.44 %",
      background: "black",
    },
  ]);

  return (
    <div>
      <Navbar />
      <section id="MainSection">
        <div className="containe">
          <div className="heatmapboxes">
            {cards.map((card, i) => (
              <div key={i} className="heatmapbox">
                <div className="BigContainer" >
                  <h3>{card.title}</h3>
                  <p>{card.date}</p>
                  <div className="SmallContainer">
                    <p>{card.amount}</p>
                    <p>{card.percentageChange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Heatmap;
