import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/product/PROD1.png";
import img2 from "../../img/product/PROD2.png";
import img3 from "../../img/product/PROD3.png";
import img4 from "../../img/product/PROD4.png";
import img5 from "../../img/product/PROD5.png";
import img6 from "../../img/product/PROD6.png";

import Carousel from "react-bootstrap/Carousel";

export default function Beats() {
  return (
    <div id="beats">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img5} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img6} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
