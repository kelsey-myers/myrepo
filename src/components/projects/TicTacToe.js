import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
const img1 =
  "https://ik.imagekit.io/kelseymyers0/Projects/tictactoe_sWgy5AF7ZE0.png";

export default function TicTacToe() {
  return (
    <div>
      <img src={img1} className="gallery-img" alt="Tic Tac Toe screenshot" />
    </div>
  );
}
