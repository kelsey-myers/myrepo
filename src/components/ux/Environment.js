import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/UX/EN1_wAv-R8sAN.png";
const img2 = "https://ik.imagekit.io/kelseymyers0/UX/EN2_QiwqSgHTp38x.png";
const img3 = "https://ik.imagekit.io/kelseymyers0/UX/EN3_zW03vbabO3b.png";
const img4 = "https://ik.imagekit.io/kelseymyers0/UX/EN4_1WfmXJgTI.png";

export default function Environment() {
  return (
    <div>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img4} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
