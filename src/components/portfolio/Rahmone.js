import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/rahmone/RAH1.PNG";
import img2 from "../../img/rahmone/RAH2.PNG";
import img3 from "../../img/rahmone/RAH3.PNG";
import img4 from "../../img/rahmone/RAH4.PNG";
import img5 from "../../img/rahmone/RAH5.PNG";
import img6 from "../../img/rahmone/RAH6.PNG";
import img7 from "../../img/rahmone/RAH7.PNG";
import img8 from "../../img/rahmone/RAH8.PNG";


import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function TTTrade() {

    return (
        <div>
            <p className="work-sans-400 primary">Click on the below images to enlarge them. All images were screenshotted on an iPad. </p><br/>
        <Carousel indicators={false} interval={null} >
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
                <Carousel.Item>
                <ModalImage
                    hideDownload
                    hideZoom
                    className="gallery-img"
                    small={img6}
                    large={img6}
                    />
                </Carousel.Item>
                <Carousel.Item>
                <ModalImage
                    hideDownload
                    hideZoom
                    className="gallery-img"
                    small={img7}
                    large={img7}
                    />
                </Carousel.Item>
                <Carousel.Item>
                <ModalImage
                    hideDownload
                    hideZoom
                    className="gallery-img"
                    small={img8}
                    large={img8}
                    />
                </Carousel.Item>
            </Carousel>
                <br/>
                <p className="work-sans-400 primary">
                RahmoneTK is a Twitch streamer and Smash Bros player. He is also a graphic artist and wanted a portfolio website to display his works. This is a regular multi-page website with the following features: <br/> <br/>
               - Built with HTML, CSS, JavaScript and PHP <br/>
               - Responsive <br/>
               - Like Button <br/> 
               - Contact Section with Email & Phone <br/> 
              - Multiple Galleries <br/>
               - Social Media Links <br/><br/>
                <a href="https://rahmone.shop" target="_blank" rel="noopener noreferrer">Visit Website</a>
                </p>
            </div>
    )
}
    