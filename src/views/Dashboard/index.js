import React, { useState } from "react";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { HiUserAdd, HiUserGroup } from "react-icons/hi";

import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";

import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

// reactstrap components
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

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import PdfView from "../Charts/Add";
import { NavLink } from "react-router-dom";

function Dashboard(props) {
  const [formData, setFormData] = useState([]);
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const chartData = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Income by Month",
        align: "left",
       
         style: {
      fontSize:  '16px',
      fontWeight:  'bold',
     
      color:  'rgb(211,211,211)'
    },
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],

          labels: {
        show: true,
         style: {
              colors: "rgb(211,211,211)",
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
      }
      },
      yaxis: {
  labels: {
    style: {
       colors: "rgb(211,211,211)",
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
    }
  }
}
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      chart_Category: "",
      chartFile: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
             
              <CardBody>
                <div id="chart">
                  <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={400}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Clients This Month</h5>
                <CardTitle tag="h3">
                  <HiUserAdd
                    style={{
                      color: "rgb(190,230,75)",
                      fontSize: "23px",
                      marginBottom: "2%",
                    }}
                  />{" "}
                  50+
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Clients </h5>
                <CardTitle tag="h3">
                  <HiUserGroup
                    style={{
                      color: "rgb(16,232,190)",
                      fontSize: "23px",
                      marginBottom: "2%",
                    }}
                  />{" "}
                  1000+
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Income This Month</h5>
                <CardTitle tag="h3">
                  <GiMoneyStack
                    style={{
                      color: "rgb(190,230,75)",
                      fontSize: "23px",
                      marginBottom: "2%",
                    }}
                  />{" "}
                  ₹ 50,00,00
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col lg="3">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Income </h5>
                <CardTitle tag="h3">
                  <GiTakeMyMoney
                    style={{
                      color: "rgb(16,232,190)",
                      fontSize: "23px",
                      marginBottom: "2%",
                    }}
                  />{" "}
                  ₹ 40,000,00+
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Helpers & Trainers</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aniket Kushwaha</td>
                      <td>Helper</td>
                    </tr>

                    <tr>
                      <td>kartik </td>
                      <td>Trainer</td>
                    </tr>
                    <tr>
                      <td>Rahul Arya </td>
                      <td>Trainer</td>
                    </tr>
                    <tr>
                      <td>Aniket Kushwaha</td>
                      <td>Helper</td>
                    </tr>

                    <tr>
                      <td>Rahul Arya </td>
                      <td>Trainer</td>
                    </tr>
                  </tbody>
                </Table>

                <NavLink to={"/admin/helpers"}>
                <p style={{fontSize:"12px", color:"rgb(16,232,190)",cursor:"pointer"}}>View More</p >
            </NavLink>
             
              </CardBody>
             
            </Card>
            
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4"> Clients</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>

                      <th>Join date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>

                      <td>02/45/2022</td>
                    </tr>
                    <tr>
                      <td>Aniket kushwaha</td>

                      <td>02/45/2022</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>

                      <td>02/45/2022</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>

                      <td>02/45/2022</td>
                    </tr>
                    <tr>
                      <td>Aniket kushwaha</td>

                      <td>02/45/2022</td>
                    </tr>
                  </tbody>
                </Table>
              
                <NavLink  to={"/admin/userlist"}>
                <p style={{fontSize:"12px", color:"rgb(16,232,190)",cursor:"pointer"}}>View More</p >
            </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
