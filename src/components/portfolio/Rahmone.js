import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH1_zwPwSqtOpv1.PNG";
const img2 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH2_wHINjG8-cq8.PNG";
const img3 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH3_pXo7HMCRr.PNG";
const img4 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH6_Otw5oa_BqZX.PNG";
const img5 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH7_H0gv-_IeVx.PNG";
const img6 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH8_VIheTpsMU.PNG";
const img7 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH4_XcV3UiqZo.PNG";
const img8 = "https://ik.imagekit.io/kelseymyers0/Dev/RAH5_3TXFf6FXq6X.PNG";

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
