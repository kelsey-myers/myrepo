import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const video =
  "https://ik.imagekit.io/kelseymyers0/Projects/Simulator_Screen_Recording_-_iPhone_11_-_2021-11-17_at_17.49.35_JeHxI1uRS.mp4?updatedAt=1637227464176";

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
