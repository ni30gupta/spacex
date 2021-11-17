import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/slide1.jpg";
import img2 from "../images/slide2.jpg";
import img3 from "../images/slide3.jpg";
import img4 from "../images/slide4.jpg";

export default function Third() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: "100vw", backgroundColor: "black" }}>
      <div
        style={{
          // width: "70vw",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "5rem 10rem",
        }}
      >
        <Carousel
          variant="dark"
          indicators={true}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>17” Cinematic Display</h3>
              <p>
                With 2200x1300 resolution, ultra bright, true colors and
                exceptional responsiveness, the new center display is the best
                screen to watch anywhere.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Focus on Driving</h3>
              <p>
                The ultimate focus on driving: no stalks, no shifting. Model X
                is the best SUV to drive, and the best SUV to be driven in.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Perfect Environment</h3>
              <p>
                Clean, powerful yet invisible cabin conditioning. Tri-zone
                temperature controls, ventilated front seats and HEPA filtration
                come standard.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Second slide" />

            <Carousel.Caption>
              <h3>Spacious Cabin</h3>
              <p>
                Model X offers a spacious cabin with the world's largest
                panoramic windshield, and your choice of 5, 6 or 7-seat
                configuration to suit your lifestyle.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
