import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from '../../img/proj/tictactoe.png';


import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function TicTacToe() {

    return (
        <div>
            <p className="work-sans-400 primary">Click on the below image to enlarge it. All images were screenshotted on an iPad.</p><br/>
            <Carousel controls={false} indicators={false} interval={null} >
                <Carousel.Item>
                <ModalImage
                    hideDownload
                    hideZoom
                    className="gallery-img"
                    small={img1}
                    large={img1}
                    />
                </Carousel.Item>
            </Carousel>
                <br/>
                <p className="work-sans-400 primary">
                A minigame of Tic-Tac-Toe. This was the first React project I created! The game can be played below but it looks best on desktop (or desktop-mode on mobile)! <br/><br/>
                <a href="https://kelsey-myers.github.io/tic-tac-toe-react/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                </p>
        </div>
    )
}