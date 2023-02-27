import React from "react";
import Slider from "react-slick";
import "./TESlider.css";
import BasicCard from "./TECard";

export default function TESlider() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div id="MainRoot" className="py-5">
      <h2 id="MainHead" className="my-3">TRAINING AND EDUCATION</h2>
      <Slider className="my-5" ref={slider} {...settings}>
        {TandEproducts.map((item, index) => {
          return <BasicCard item={item} key={index} />;
        })}
      </Slider>
    </div>
  );
}

const TandEproducts = [
  {
    event_name: "Training Manual",
    // EDate:Event_date,
    image: "images/trainingEdu/tm.jpg",
  },
  {
    event_name: "Webinars",
    // EDate:Event_date,
    image: "images/trainingEdu/web.jpg",
  },
  {
    event_name: "Training Videos",
    // EDate:Event_date,
    image: "images/trainingEdu/tvi.jpg",
  },
  {
    event_name: "NICR",
    // EDate:Event_date,
    image: "images/trainingEdu/NICR.jpg",
  },

  {
    event_name: "Option study material",
    // EDate:Event_date,
    image: "images/trainingEdu/osmat1.jpg",
  },
  {
    event_name: "Training Request",
    // EDate:Event_date,
    image: "images/trainingEdu/jn.jpg",
  },
];
