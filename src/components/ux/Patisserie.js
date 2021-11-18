import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE1_oPlTK4AJM.png";
const img2 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE2_rd2aSpg0xZl.png";
const img3 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE3_nlKpDvmQJJh.png";
const img4 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE4_uKs4oX6AC.png";
const img5 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE5_q6MfSZzzGTb2.png";
const img6 = "https://ik.imagekit.io/kelseymyers0/UX/CAKE6_sRZACqPTW.png";

export default function Patisserie() {
  return (
    <div id="beats">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img1} alt="Patisserie 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img2} alt="Patisserie 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img3} alt="Patisserie 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img4} alt="Patisserie 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img5} alt="Patisserie 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux w-100" src={img6} alt="Patisserie 6" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
