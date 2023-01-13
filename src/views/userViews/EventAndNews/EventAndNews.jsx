import React from "react";

import { Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { height } from "@mui/system";

const EventAndNews = () => {
  const array = [
    "https://c1.wallpaperflare.com/preview/598/806/429/bodybuilding-fitness-model.jpg",
    "https://images.hindustantimes.com/img/2022/04/15/1600x900/a4de33a0-bce4-11ec-9902-472e44f2ebef_1650046488588.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzBHiiKXlATgvo1VreJQ8Q0r4is-ShpedqIkxzu93dzgk_T6IC9zE3ldksJsTQKfkYgQ&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/959/381/175/bodybuilding-images-for-backgrounds-desktop-wallpaper-preview.jpg",
    "https://img.huffingtonpost.com/asset/570fc8b22200002900253884.jpeg?ops=scalefit_960_noupscale&format=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4X0qz6FViSCSclABDUJjvlmBFkHIoTwKww&usqp=CAU",
  ];
  return (
    <>
      <img
       className="card_imgBox" 
        src="https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <h1
       id="plane-text-heading-h1"
      >
        Event&<span style={{ color: "rgb(173,255,47)" }}>News</span>
      </h1>
      <div className="services-text">
        Pro Ultimate Gyms is acknowledged for its unrivaled success in providing
        the finest gym equipment and fitness knowledge available to help its
        members achieve their individual goals, whether you want fat loss,
      </div>

      <div style={{ width: "90%", margin: "auto", marginTop: "100px" }}>
        <Row>
          {array.map((e) => (
            <Col lg="4">
              <Card style={{ minHeight: "500px", background: "white" }}>
                <Card.Img
                  style={{ width: "100%", height: "300px" }}
                  variant="top"
                  src={e}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "rgb(41,40,45)",
                      fontWeight: "600",
                      fontSize: "23px",
                      textAlign: "center",
                    }}
                    className="trainer-heading"
                  >
                    Bodybuilding 2021
                  </Card.Title>
                  <Card.Text
                   id="plane-text"
                  >
                    Sport has the power to change the world. It has the power to
                    inspire, it has the power to unite people in a way that
                    little else does” Pro Ultimate Gyms celebrates National
                    Sports Day in Chandigarh like never seen.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default EventAndNews;
