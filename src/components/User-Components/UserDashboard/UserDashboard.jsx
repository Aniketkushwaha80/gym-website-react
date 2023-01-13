import React from "react";
import "./UserDashboard.css";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faBicycle,
  faHeartPulse,
  faPersonWalking,
  faFireFlameCurved,
} from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import AutoSlider from "components/shared/Slider/AutoSlider";
import CardSlider from "components/shared/CardSlider/CardSlider";
const UserDashboard = () => {
  const trainers = [
    {
      FirstName: "Divya",
      LastName: "Singh",
      Trainer_image:
        "https://images.unsplash.com/photo-1613686933606-7f86f06d0d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      FirstName: "kratika",
      LastName: "Gupta",
      Trainer_image:
        "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    },
    {
      FirstName: "Aniket",
      LastName: "Kushwaha",
      Trainer_image:
        "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      FirstName: "Bhupendra",
      LastName: "Singh",
      Trainer_image:
        "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80",
    },
    {
      FirstName: "Ayush",
      LastName: "Baghel",
      Trainer_image:
        "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const services = [
    {
      catName: "Body Building",
      logo: <FontAwesomeIcon icon={faDumbbell} className="service-logo" />,
      text: "Bodybuilding is just like living a military precision in a civilian lifestyle. For building a body’s muscles, one has to be disciplined and as fit as a seal. It can be achieved through weightlifting exercises, rich nutritional diet, and disciplined gym routine. Regular exercises and good diet offers ample of health benefits.",
    },
    {
      catName: "Persnal Training",
      logo: <FontAwesomeIcon icon={faBicycle} className="service-logo" />,
      text: "There’s nothing better than having the workout where the focus is YOU. Personal Training provides your personal certified trainer are motivated in transforming your health and achieving fitness goals. We will develop the workout strategy tailored to your fitness regimen, keeping in view your potentials.",
    },

    {
      catName: "weight managment",
      logo: <FontAwesomeIcon icon={faPersonWalking} className="service-logo" />,
      text: "To stay in the desired shape is one of our fitness goals and unwanted weight is one of the common hurdles. Regular exercises and Planned workout helps in maintaining the required body weight. It is more than just weight loss. It has various amazing benefits on the mind and body. A healthy weight is important for health.",
    },
    {
      catName: "Core blast Training",
      logo: (
        <FontAwesomeIcon icon={faFireFlameCurved} className="service-logo" />
      ),
      text: "An intense workout that requires no types of equipment, it can be done anywhere all you need is a plain ground. This workout targets your abs, back, and midriff with no rest intervals. It focuses on your core areas, correcting posture, and improves strength. It makes your body robust and more in shape.",
    },
    {
      catName: "Crossfitt Training",
      logo: <FontAwesomeIcon icon={faDumbbell} className="service-logo" />,
      text: "This workout fits for everyone-whether a beginner or trained for years. It is mainly a mix of aerobics and bodyweight exercises. Here people work out in groups than alone, the combined power results in a synergy that can be very productive. This activity does not require any equipment or added weights.",
    },
    {
      catName: "Nutrition Wellness Consultation",
      logo: <FontAwesomeIcon icon={faHeartPulse} className="service-logo" />,
      text: "There’s always a misconception among some people that eating less would help them to get in shape. But the fact is practising fasting will take you nowhere, instead of eating quality food in required quantity would be fruitful to gain feasible results.",
    },
  ];
  return (
    <div>
      <AutoSlider />
      <div style={{ width: "95%", margin: "auto", marginTop: "100px" }}>
        <Row>
          <Col lg="6">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://i0.wp.com/proultimategyms.in/wp-content/uploads/2021/09/Pro-ultimate-gyms-Gym-about.jpg?w=900&ssl=1"
                  alt=""
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <CardTitle

                id="side-plane-text"
                
                  tag="h1"
                >
                  Welcome To{" "}
                  <span style={{ color: "rgb(173,255,47)" }}>Fit For Life</span>
                </CardTitle>
                <p
                  id="plane-text"
                >
                  Abhishek Gagneja created the renowned chain of Pro ultimate
                  Gyms. Being one of the most successful fitness entrepreneurs
                  and purpose-driven leader creates the spirit of inspiration
                  for many fitness events mainly ‘Mr. Ultimate Fitness Physique
                  Competition’.
                </p>
                <div className="center-text">Learn More ></div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <CardTitle
                 id="side-plane-text"
              
                  tag="h1"
                >
                  Why{" "}
                  <span style={{ color: "rgb(173,255,47)" }}>Fit For Life</span>{" "}
                  ?
                  <br />
                  Largest Privately Owned Fitness Chain
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <p
                  id="plane-text"
                >
                  Pro Ultimate Gyms has undoubtedly carved a niche in the
                  fitness industry. We provide services at a price point
                  accessible to nearly everyone. Our motto is creating the
                  fusion of best fitness training and entertainment – doing any
                  workout with unbeatable energy. Our professional trainers
                  assist you at every step right from setting goals to
                  customizing your workout plans, designed fully around you.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h1
                  id="plane-text-heading-h1"
        >
          OUR <span style={{color: "rgb(173,255,47)",}}>SERVICES</span>
        </h1>

        <CardSlider slideTime={3000} keyName="service" services={services} />

        <h1
         id="plane-text-heading-h1"
         
        >
          OUR <span style={{color: "rgb(173,255,47)",}}>TRAINERS</span>
        </h1>
        <CardSlider slideTime={3000} keyName="trainer" trainers={trainers} />
      </div>
    </div>
  );
};

export default UserDashboard;
