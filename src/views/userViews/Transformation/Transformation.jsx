import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

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

const Transformation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img
        className="card_imgBox"
        src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div style={{ width: "90%", margin: "auto", marginTop: "100px" }}>
        <h1
        id="plane-text-heading-h1"
        >
          TRANSFOR <span style={{ color: "rgb(173,255,47)" }}>MATION</span>
        </h1>

        <Row style={{ margin: "auto" }}>
          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white",borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)" }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" ,marginBottom:"10px"}}>
                  <img
                    style={{ width: "49%", height: "350px" }}
                    src="https://static.onecms.io/wp-content/uploads/sites/44/2019/11/arielle-calderon-weight-loss.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%", height: "350px" }}
                    src="https://i.pinimg.com/originals/41/38/39/4138399cc151576364f46173939f87d7.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/474x/9c/c0/81/9cc0813f036d1facca2cdc4970aa5089.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://w0.peakpx.com/wallpaper/858/500/HD-wallpaper-gym-bodybuilder-fitness-muscle.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/736x/52/2a/d5/522ad59540835ad7f7737a990c9185cc.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/736x/cb/19/3f/cb193f0904ed4aacc70113c2b2655343.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/236x/8e/a6/3c/8ea63c7d2a6548d19f4b7ae9862dcca3--model-polaroids-lucky-blue-smith.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://w0.peakpx.com/wallpaper/858/500/HD-wallpaper-gym-bodybuilder-fitness-muscle.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white",borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)" }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" ,marginBottom:"10px"}}>
                  <img
                    style={{ width: "49%", height: "350px" }}
                    src="https://static.onecms.io/wp-content/uploads/sites/44/2019/11/arielle-calderon-weight-loss.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%", height: "350px" }}
                    src="https://i.pinimg.com/originals/41/38/39/4138399cc151576364f46173939f87d7.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/474x/9c/c0/81/9cc0813f036d1facca2cdc4970aa5089.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://w0.peakpx.com/wallpaper/858/500/HD-wallpaper-gym-bodybuilder-fitness-muscle.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/736x/52/2a/d5/522ad59540835ad7f7737a990c9185cc.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/736x/cb/19/3f/cb193f0904ed4aacc70113c2b2655343.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" style={{ height: "400px" }}>
            <Card style={{ height: "380px", background: "white" ,borderTop:"5px solid rgb(173,255,47)",borderBottom:"5px solid rgb(173,255,47)"  }}>
              <CardBody>
                <Row style={{ display: "flex", gap: "2%" }}>
                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://i.pinimg.com/236x/8e/a6/3c/8ea63c7d2a6548d19f4b7ae9862dcca3--model-polaroids-lucky-blue-smith.jpg"
                    alt=""
                  />

                  <img
                    style={{ width: "49%",height: "350px" }}
                    src="https://w0.peakpx.com/wallpaper/858/500/HD-wallpaper-gym-bodybuilder-fitness-muscle.jpg"
                    alt=""
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal
          style={{ border: "1px solid red" }}
          show={show}
          onHide={handleClose}
        >
          <Modal.Body style={{ border: "1px solid red" }}>
            Woohoo, you're reading this text in a modal! cwefdedwedwedwe
            dwedwedweddwwwwwwwwwwwwwwwwwe wedddddddd edddddddddddddddddd
            edddddddddd
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Transformation;
