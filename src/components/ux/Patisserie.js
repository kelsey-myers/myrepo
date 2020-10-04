import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/patisserie/CAKE1.png";
import img2 from "../../img/patisserie/CAKE2.png";
import img3 from "../../img/patisserie/CAKE3.png";
import img4 from "../../img/patisserie/CAKE4.png";
import img5 from "../../img/patisserie/CAKE5.png";
import img6 from "../../img/patisserie/CAKE6.png";

import Carousel from "react-bootstrap/Carousel";

export default function Patisserie() {
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
