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

const img6 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day5Mockup_SIAe08u00.png";
const img7 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day6Mockup_epuTfb1xyY9.png";
const img8 =
  "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day7Mockup_yRFL3dmyg.png";

export default function HundredDays() {
  return (
    <div id="100days">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <a href={img1} target="_blank">
            <img
              className="gallery-img hundred"
              src={img1}
              alt="Mockup of Signup form"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img2} target="_blank">
            <img
              className="gallery-img hundred"
              src={img2}
              alt="Mockup of Card Payment Page"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img3} target="_blank">
            <img
              className="gallery-img hundred"
              src={img3}
              alt="Mockup of Landing Page - Mobile"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img4} target="_blank">
            <img
              className="gallery-img hundred w-100"
              src={img4}
              alt="Mockup of Landing Page - Web"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img5} target="_blank">
            <img
              className="gallery-img hundred"
              src={img5}
              alt="Mockup of Grade Calculator"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img6} target="_blank">
            <img
              className="gallery-img hundred"
              src={img6}
              alt="Image of App icon"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img7} target="_blank">
            <img
              className="gallery-img hundred"
              src={img7}
              alt="Image of Social Media Profile Mockup"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img8} target="_blank">
            <img
              className="gallery-img hundred w-100"
              src={img8}
              alt="Image of Settings Page Mockup"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
