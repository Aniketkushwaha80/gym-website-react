import React from 'react';

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

const AboutUs = () => {
   return (
    <>
      <img
        className="card_imgBox" 
        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <h1
         id="plane-text-heading-h1"
      >
        ABOUT <span style={{ color: "rgb(173,255,47)" }}>US</span>
      </h1>
     

      <div style={{ width: "90%", margin: "auto", marginTop: "70px" }}>
        <Row>
          <Col lg="7">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvdW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="5">
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
                  FOUNDER &<span style={{ color: "rgb(173,255,47)" }}> CEO</span>
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
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="5">
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
                  FIT FOR <span style={{ color: "rgb(173,255,47)" }}>LIFE</span>
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
              </CardBody>
            </Card>
          </Col>

          <Col lg="7">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

       

       
      </div>
    </>
  );
};

export default AboutUs;