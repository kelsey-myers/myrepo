import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const video = "https://ik.imagekit.io/kelseymyers0/Projects/Taskade_dchjjyh03";

export default function Taskade() {
  return (
    <div>
      <video
        src={video}
        className="gallery-img-portrait"
        alt="ToDo app screenshot"
        autoPlay
        loop
      />
    </div>
  );
}
