import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from '../../img/proj/google.png';


import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function Google() {

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
                A concept Google Search homepage created when I first started to code! <br/><br/>
                <a href="https://kelsey-myers.github.io/google-homepage/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                </p>
        </div>
    )
}