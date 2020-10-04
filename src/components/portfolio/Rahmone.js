import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/rahmone/RAH1.PNG";
import img2 from "../../img/rahmone/RAH2.PNG";
import img3 from "../../img/rahmone/RAH3.PNG";
import img4 from "../../img/rahmone/RAH4.PNG";
import img5 from "../../img/rahmone/RAH5.PNG";
import img6 from "../../img/rahmone/RAH6.PNG";
import img7 from "../../img/rahmone/RAH7.PNG";
import img8 from "../../img/rahmone/RAH8.PNG";

import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

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
