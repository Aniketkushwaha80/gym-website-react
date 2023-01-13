import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";

import "./CardSlider.css";
const CardSlider = (prop) => {
  console.log(prop);
  const time = prop.slideTime;
  const settings = {
    autoplay: true,
    autoplaySpeed: time,
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {prop.keyName == "trainer" ? (
        <Slider {...settings}>
          {prop.trainers.map((trainer) => (
            <div>
              <Card id="card-slider-img" >
                <Card.Img
                  className="trainer-image"
                  src={trainer.Trainer_image}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="trainer-heading">
                    {trainer.FirstName}
                  </Card.Title>
                  <Card.Title className="trainer-heading-lastname">
                    {trainer.LastName}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </Slider>
      ) : (
        ""
      )}

      {prop.keyName == "service" ? (
        <Slider {...settings}>
          {prop.services.map((service) => (
            <div>
              <Card
                style={{
                  minHeight: "430px",
                  background: "white",
                  border: "7px solid rgb(173,255,47)",
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "auto",
                      background: "rgb(173,255,47)",
                      borderRadius: "50%",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {service.logo}
                  </div>
                  <Card.Title
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "25px",
                      textAlign: "center",
                      margin: "10px",
                    }}
                  >
                    {service.catName}
                  </Card.Title>

                  <Card.Text
                 id="plane-text"
                  >
                    {service.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      ) : (
        ""
      )}
    </>
  );
};

export default CardSlider;
