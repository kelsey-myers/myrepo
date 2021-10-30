import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const video =
  "https://ik.imagekit.io/kelseymyers0/Projects/tesla-app_QziSMXB1m.mp4";

export default function Tesla() {
  return (
    <div>
      <video
        src={video}
        className="gallery-img-portrait"
        alt="Tesla app screenshot"
        autoPlay
        loop
      />
    </div>
  );
}
