import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day1Mockup_w9ikM98DKcX.png";
const img2 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day2Mockup_UhkMlJcVC.png";
const img3 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day3Mockup_lrJ0Dv4XIY.png";
const img4 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day3MockupW_2oo17ioyvvX.png";
const img5 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day4Mockup_dkNM86dO0.png";

export default function HundredDays() {
  return (
    <div id="100days">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img
            className="gallery-img hundred"
            src={img1}
            alt="Mockup of Signin form"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img hundred"
            src={img2}
            alt="Mockup of Card Payment Page"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img hundred"
            src={img3}
            alt="Mockup of Landing Page - Mobile"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img hundred w-100"
            src={img4}
            alt="Mockup of Landing Page - Web"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img hundred"
            src={img5}
            alt="Mockup of Grade Calculator"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
