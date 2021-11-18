import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/Dev/KEL1_8IIL-y2M7.PNG";
const img2 = "https://ik.imagekit.io/kelseymyers0/Dev/KEL2_mVgZivXXY.PNG";
const img3 = "https://ik.imagekit.io/kelseymyers0/Dev/KEL3_gvHdrP_8vFg.PNG";
const img4 = "https://ik.imagekit.io/kelseymyers0/Dev/KEL4_d26dJRvVvdQ.PNG";

export default function Kelmone() {
  return (
    <div id="kelmone">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img
            className="gallery-img-ux"
            src={img1}
            alt="Kelmone School of Motoring 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img-ux"
            src={img2}
            alt="Kelmone School of Motoring 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img-ux"
            src={img3}
            alt="Kelmone School of Motoring 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img-ux"
            src={img4}
            alt="Kelmone School of Motoring 4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
