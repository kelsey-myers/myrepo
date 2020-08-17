import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/tttrade/TT1.PNG";
import img2 from "../../img/tttrade/TT2.PNG";
import img3 from "../../img/tttrade/TT3.PNG";
import img4 from "../../img/tttrade/TT4.PNG";
import img5 from "../../img/tttrade/TT5.PNG";
import img6 from "../../img/tttrade/TT6.PNG";
import img7 from "../../img/tttrade/TT7.PNG";
import img8 from "../../img/tttrade/TT8.jpg";


import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function TTTrade() {

    return (
        <div>
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
                TT Trade Quotes is a quote-finding service which matches tradesmen with clients and vice-versa, and it is based in London. This is a regular package multi-page website
                with the following features: <br/> <br/>
                - Built with HTML, CSS, JavaScript and PHP <br/>
               - Responsive <br/> 
               - Registration Form <br/> 
               - Quote Request Form with Image Upload <br/> 
               - Contact Section with Phone <br/> 
               - Gallery <br/>
               - Social Media Links <br/><br/>
                <a href="https://tttradequotes.co.uk" target="_blank" rel="noopener noreferrer">Visit Website</a>
                </p>
            </div>
    )
}
    