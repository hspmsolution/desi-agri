import React from "react";
import Slider from "react-slick";
import "./CardS.css";
import BasicCard from "./CScard";

export default function CardS() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="py-5">
    <div id="rottt">
      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => (
          <BasicCard key={index} item={item} />
        ))}
      </Slider>
    </div>
    </div>
  );
}

const products = [
  {
    id: "Market Watch",
    image: "images/info/MarketWatch.png",
  },
  {
    id: "Bhav Copy",
    image: "images/info/BC.png",
  },
  {
    id: "FPOs",
    image: "images/info/FPOs.png",
  },
  {
    id: "TradeVerification",
    image: "images/info/TradeVerification.png",
  },

  {
    id: "ResearchReports",
    image: "images/info/ResearchReports.png",
  },
  {
    id: "InvestoGrievance",
    image: "images/info/InvestoGrievance.png",
  },
  {
    id: "Circulars",
    image: "images/info/Circulars.png",
  },
  {
    id: "CopyCalender",
    image: "images/info/CopyCalender.png",
  },
];