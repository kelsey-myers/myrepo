import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/Dev/TT1_K2W_wm3A9XF.PNG";
const img2 = "https://ik.imagekit.io/kelseymyers0/Dev/TT2_nKr61NMjo.PNG";
const img3 = "https://ik.imagekit.io/kelseymyers0/Dev/TT3_mGhAPjlc_d.PNG";
const img4 = "https://ik.imagekit.io/kelseymyers0/Dev/TT4_RBpuqCi-MGs.PNG";
const img5 = "https://ik.imagekit.io/kelseymyers0/Dev/TT5_rMVUkqmg7.PNG";
const img6 = "https://ik.imagekit.io/kelseymyers0/Dev/TT6_QaMFQIgj77.PNG";
const img7 = "https://ik.imagekit.io/kelseymyers0/Dev/TT7_wqN1HC96xNT.PNG";
const img8 = "https://ik.imagekit.io/kelseymyers0/Dev/TT8_m_NuXcZT__o9.jpg";

export default function TTTrade() {
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
        <Carousel.Item>
          <img className="gallery-img" src={img5} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img6} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img7} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img" src={img8} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}