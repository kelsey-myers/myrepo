import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/environment/EN1.png";
import img2 from "../../img/environment/EN2.png";
import img3 from "../../img/environment/EN3.png";
import img4 from "../../img/environment/EN4.png";

import Carousel from "react-bootstrap/Carousel";

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
