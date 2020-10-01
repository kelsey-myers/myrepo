import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/kelmone/KEL1.PNG";
import img2 from "../../img/kelmone/KEL2.PNG";
import img3 from "../../img/kelmone/KEL3.PNG";
import img4 from "../../img/kelmone/KEL4.PNG";
import img5 from "../../img/kelmone/KEL5.PNG";
import video from "../../img/kelmone/kelmone.mp4";

import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function Kelmone() {
  return (
    <div>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <video
            id="kelmone-vid"
            className="gallery-img"
            src={video}
            autoPlay
            loop
            controls
            controlsList="fullscreen nodownload"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ModalImage
            hideDownload
            hideZoom
            className="gallery-img"
            small={img1}
            large={img1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ModalImage
            hideDownload
            hideZoom
            className="gallery-img"
            small={img2}
            large={img2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ModalImage
            hideDownload
            hideZoom
            className="gallery-img"
            small={img3}
            large={img3}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ModalImage
            hideDownload
            hideZoom
            className="gallery-img"
            small={img4}
            large={img4}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ModalImage
            hideDownload
            hideZoom
            className="gallery-img"
            small={img5}
            large={img5}
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <p className="work-sans-400 primary">
        Kelmone School of Motoring is a driving school based in Dartford. This
        is a basic single-page website with the following features: <br />{" "}
        <br />
        - Responsive <br />
        - Built with React, HTML, CSS & JavaScript <br />
        - Contact Form with Email & Phone <br />
        - Gallery <br />
        - Social Media Links <br />
        <br />
        <a
          href="https://kelmoneschoolofmotoring.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </p>
    </div>
  );
}
