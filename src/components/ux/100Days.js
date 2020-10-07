import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day1Mockup_w9ikM98DKcX.png";
const img2 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day2Mockup_UhkMlJcVC.png";

export default function HundredDays() {
  return (
    <div id="100days">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img hundred" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img hundred" src={img2} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
