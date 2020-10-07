import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/Projects/google_LYm6rw1xV.png";

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
