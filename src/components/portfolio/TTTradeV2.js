import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/TradeV2/img1_k5joPTJptNnb.png";
const img2 = "https://ik.imagekit.io/kelseymyers0/TradeV2/img2_bJUPTVxJNrK.png";
const img3 = "https://ik.imagekit.io/kelseymyers0/TradeV2/img3_Np0V4VIEG.png";
const img4 =
  "https://ik.imagekit.io/kelseymyers0/TradeV2/img4_L9HLMYyMCNwc.png";
const img5 = "https://ik.imagekit.io/kelseymyers0/TradeV2/img5_pkmEOotEQ0e.png";
const img6 = "https://ik.imagekit.io/kelseymyers0/TradeV2/img6_tlWaSTEkK2.png";
const img7 = "https://ik.imagekit.io/kelseymyers0/TradeV2/img7_CZsfv9Ylx.png";

export default function TTTradeV2() {
  return (
    <div>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img1}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img2}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img3}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img4}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img5}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img6}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="gallery-img"
            src={img7}
            alt="TT Trade Quotes V2 Gallery"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
