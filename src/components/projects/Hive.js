import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/Projects/hive_1_ByddwkFfs.png";
const img2 =
  "https://ik.imagekit.io/kelseymyers0/Projects/hive_2_Z1XfgXyxic.png";

export default function Hive() {
  return (
    <div id="hive">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img1} alt="Hive - Desktop" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img-portrait"
            src={img2}
            alt="Hive - Wallpaper"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
