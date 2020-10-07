import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/UX/MY1_hVg2Ud_S03Kv.png";
const img2 = "https://ik.imagekit.io/kelseymyers0/UX/MY2_ohxnZnLeGhu.png";
const img3 = "https://ik.imagekit.io/kelseymyers0/UX/MY3_JoXzORy-n.png";
const img4 = "https://ik.imagekit.io/kelseymyers0/UX/MY4_O-YAY6630Z.png";
const img5 = "https://ik.imagekit.io/kelseymyers0/UX/MY5_pMCa4O_4jOP.png";
const img6 = "https://ik.imagekit.io/kelseymyers0/UX/MY6_zEdEQDoSl.png";

export default function MyRepo() {
  return (
    <div id="myrepo">
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
      </Carousel>
    </div>
  );
}
