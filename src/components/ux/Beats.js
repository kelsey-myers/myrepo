import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/UX/PROD1_shQLyblHx.png";
const img2 = "https://ik.imagekit.io/kelseymyers0/UX/PROD2_NtL8opGNYX7J.png";
const img3 = "https://ik.imagekit.io/kelseymyers0/UX/PROD3_bK3FPXLf4a1j.png";
const img4 = "https://ik.imagekit.io/kelseymyers0/UX/PROD4_oo09bjZk4w5.png";
const img5 = "https://ik.imagekit.io/kelseymyers0/UX/PROD5_mhbf6YtBb.png";
const img6 = "https://ik.imagekit.io/kelseymyers0/UX/PROD6_bbWIBPcVS1.png";

export default function Beats() {
  return (
    <div id="beats">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img1} alt="Beats 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img2} alt="Beats 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img3} alt="Beats 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img4} alt="Beats 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img5} alt="Beats 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img6} alt="Beats 6" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
