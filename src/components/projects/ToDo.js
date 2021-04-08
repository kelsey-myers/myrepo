import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const img1 = "https://ik.imagekit.io/kelseymyers0/Projects/todo_o8E6hrxxfp.png";

export default function TicTacToe() {
  return (
    <div>
      <img src={img1} className="gallery-img-portrait" alt="To-do list" />
    </div>
  );
}
