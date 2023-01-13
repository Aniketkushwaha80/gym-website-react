import React from "react";
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
import { HiUserCircle } from "react-icons/hi";
import { height } from "@mui/system";
import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";

const ClientDetails = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Row style={{ display: "flex" }}>
                  <Col className="pr-md-1" md="4">
                    <HiUserCircle style={{ width: "80%", height: "80%" }} />
                  </Col>

                  <Col
                    className="pr-md-1"
                    md="8"
                    style={{ alignItems: "center" }}
                  >
                    <CardBody>
                      <Table
                        style={{ border: "none" }}
                        className="tablesorter"
                        responsive
                      >
                        <thead className="text-primary">
                          <tr>
                            <th style={{ fontSize: "12px" }}>Name :</th>
                            <td
                              style={{
                                fontSize: "15px",
                                color: "rgb(37,119,246)",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              Aniket Kushwaha
                            </td>

                            <th style={{ fontSize: "12px" }}>Email :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              AniketKushwaha@gmail.com
                            </td>
                          </tr>
                        </thead>
                        <thead className="text-primary">
                          <tr>
                            <th style={{ fontSize: "12px" }}>Phone :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              871820714
                            </td>

                            <th style={{ fontSize: "12px" }}>Pt :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              No
                            </td>
                          </tr>
                        </thead>

                        <thead className="text-primary">
                          <tr>
                            <th style={{ fontSize: "12px" }}>Package :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              3 Months (2200)
                            </td>

                            <th style={{ fontSize: "12px" }}>Join Date :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              02/45/2022
                            </td>
                          </tr>
                        </thead>



                        
                        <thead className="text-primary">
                          <tr>
                            <th style={{ fontSize: "12px" }}>Trainer Name :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              Rahul arya
                            </td>

                            <th style={{ fontSize: "12px" }}>End Date :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(226,102,102)",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              02/45/2022
                            </td>
                          </tr>
                        </thead>
                          <thead className="text-primary">
                          <tr>
                          

                           

                              <th style={{ fontSize: "12px" }}>Amount :</th>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "rgb(169,169,169",
                                fontWeight: "500",
                                border: "none",
                              }}
                            >
                              50,000
                            </td>
                          </tr>
                        </thead>
                      </Table>
                    
                     <Col md="4">
                     </Col>
                    <div>
                      <li
                        style={{
                          marginBottom: "10px",
                          cursor: "pointer",
                          color:"#e26666",
                          
                           fontSize: "14px",
                        letterSpacing: "0.7px",
                        fontWeight: "150",
                        }}
                      >
                      Fat Loss Ritik singh Chouhan resume.pdf
                      </li>
                        <li
                        style={{
                         
                          cursor: "pointer",
                             color:"#e26666",
                              fontSize: "14px",
                        letterSpacing: "0.7px",
                        fontWeight: "150",
                        }}
                      >
                      Fat Loss Ritik singh Chouhan resume.pdf
                      </li>
                    </div>
                  
                    </CardBody>
                  </Col>
                
                  <div
                    style={{
                      border: "0.2px solid rgb(82,95,127)",
                      width: "98%",
                      margin: "auto",
                    }}
                  ></div>

                  <Col md="12">
                    <br />
                    <CardHeader>
                      <h5 style={{ fontSize: "20px" }} className="title">
                        Entry Table
                      </h5>

                      <Input
                        style={{
                          width: "20%",
                          float: "left",
                          backgroundColor: "rgb(39,41,61)",
                        }}
                        id="exampleSelect"
                        name="select"
                        type="select"
                      >
                        <option>Filter</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                      </Input>
                    </CardHeader>

                    <br />
                    <br />
                    <CardBody>
                      <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Status</th>
                            <th>Entry Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>02/45/2022</td>
                            <td>Monday</td>
                            <td>
                              <RxCross1
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  marginLeft: "8%",
                                }}
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>02/45/2022</td>
                            <td>Tuesdat</td>
                            <td>
                              <GiCheckMark
                                style={{
                                  color: "green",
                                  fontSize: "20px",
                                  marginLeft: "8%",
                                }}
                              />
                            </td>
                            <td>08:00 pm</td>
                          </tr>
                          <tr>
                            <td>02/45/2022</td>
                            <td>Wednesday</td>
                            <td>
                              <GiCheckMark
                                style={{
                                  color: "green",
                                  fontSize: "20px",
                                  marginLeft: "8%",
                                }}
                              />
                            </td>
                            <td>08:30 pm</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ClientDetails;
