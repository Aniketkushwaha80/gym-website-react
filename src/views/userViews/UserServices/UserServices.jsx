import React from "react";
import "./UserServices.css";

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

const UserServices = () => {
  return (
    <>
      <img
      className="card_imgBox" 
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <h1
         id="plane-text-heading-h1"
      >
        OUR <span style={{ color: "rgb(173,255,47)" }}>Services</span>
      </h1>
      <div className="services-text">
        Pro Ultimate Gyms is acknowledged for its unrivaled success in providing
        the finest gym equipment and fitness knowledge available to help its
        members achieve their individual goals, whether you want fat loss,
        muscle gain or overall body toning. We also provide best Yoga Classes,
        Zumba Classes or Bhangra Classes in Tricity; Chandigarh, Mohali &
        Zirakpur. We follow a globally proven fitness training module with
        state-of-the-art infrastructure, delivery methodology and continuous up
        gradation through training programs.
      </div>

      <div style={{ width: "90%", margin: "auto", marginTop: "100px" }}>
        <Row>
          <Col lg="7">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                  ZU<span style={{ color: "rgb(173,255,47)" }}>MBA</span>
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
                  YO<span style={{ color: "rgb(173,255,47)" }}>GA</span>
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

         <Row>
          <Col lg="7">
            <Card style={{ height: "400px", background: "white" }}>
              <CardBody>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                 
AER<span style={{ color: "rgb(173,255,47)" }}>OBICS</span>
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
                  CROS<span style={{ color: "rgb(173,255,47)" }}>SFIT</span>
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
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
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

export default UserServices;
