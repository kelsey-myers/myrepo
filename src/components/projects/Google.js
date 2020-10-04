import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/proj/google.png";

import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function Google() {
  return (
    <div>
      <img
        src={img1}
        className="gallery-img"
        alt="Google homepage screenshot"
      />
    </div>
  );
}
