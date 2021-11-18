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
          <img className="gallery-img-ux" src={img1} alt="MyRepo 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux" src={img2} alt="MyRepo 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux" src={img3} alt="MyRepo 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux" src={img4} alt="MyRepo 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux" src={img5} alt="MyRepo 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img-ux" src={img6} alt="MyRepo 6" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
