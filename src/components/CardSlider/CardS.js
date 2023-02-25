import React from "react";
import Slider from "react-slick";
// import Slider from "react-slick";
import "./CardS.css";
import BasicCard from "./CScard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"  }}
      // onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      // onClick={onClick}
    >
      BACK
    </div>
  );
}

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

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

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

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="rottt">
      {/* <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        REACT-SLICK CAROUSEL
      </h1> */}

      {/* <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()} id="btta">Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
          id="btta"
        >
          Next
        </button>
      </div> */}

      <Slider ref={slider} {...settings}>
        {products?.map((item, index, image) => {
          return <BasicCard key={index} item={item}    />;
        })}
      </Slider>
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