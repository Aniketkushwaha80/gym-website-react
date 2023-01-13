import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Table,
  CardTitle,
  Col,
  Label,
  Alert,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import TableList from "components/shared/Table/TableList";

function Helper() {
  const [formData, setFormData] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      Date_Of_birth: "",
      AdharCard: "",
    },
  });

  const TableHead = ["Name", "Email", "phone", "Date Of Birth", "Actions"];
  const [clients, setClients] = useState([
    {
      id: 1,
      firstName: "Beatrix",
      lastName: "Potter",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 2,
      firstName: "Ann",
      lastName: "Martin",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 3,
      firstName: "Beverly",
      lastName: "Cleary",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 4,
      firstName: "Roald",
      lastName: "Dahl",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 5,
      firstName: "Lewis",
      lastName: "Carroll",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 6,
      firstName: "Beatrix",
      lastName: "Potter",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 7,
      firstName: "Ann",
      lastName: "Martin",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 8,
      firstName: "Beverly",
      lastName: "Cleary",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 9,
      firstName: "Roald",
      lastName: "Dahl",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 10,
      firstName: "Lewis",
      lastName: "Carroll",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 11,
      firstName: "Beatrix",
      lastName: "Potter",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 12,
      firstName: "Ann",
      lastName: "Martin",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 13,
      firstName: "Beverly",
      lastName: "Cleary",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
    {
      id: 14,
      firstName: "Roald",
      lastName: "Dahl",
      Email: "xyz.32.com",
      phone: "8721556552",
      Date_Of_Birth: "02/45/2022",
    },
  ]);

  // paginsation
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = clients.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(clients.length / recordsPerPage);
  const pagenumber = [];

  for (var i = 1; i <= nPages; i++) {
    pagenumber.push(i);
  }

  const onSubmit = (data) => setFormData(data);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Helpers & Trainers</CardTitle>
               
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>First Name</label>

                        <Controller
                          name="firstName"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="text"
                                onChange={onChange}
                                selected={value}
                              />
                            );
                          }}
                        />
                        {errors.firstName && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            First Name is Required{" "}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Last Name</label>
                        <Controller
                          name="lastName"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="text"
                                onChange={onChange}
                                selected={value}
                              />
                            );
                          }}
                        />
                        {errors.lastName && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Last Name is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>

                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>
                          Email address
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="email"
                                onChange={onChange}
                                selected={value}
                              />
                            );
                          }}
                        />
                        {errors.email && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Email is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Phone</label>
                        <Controller
                          name="phone"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="number"
                                onChange={onChange}
                                selected={value}
                              />
                            );
                          }}
                        />
                        {errors.phone && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Phone Number is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>

                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>
                          Date Of Birth
                        </label>

                        <Controller
                          name="Date_Of_birth"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                style={{ colorScheme: "dark" }}
                                type="date"
                                onChange={onChange}
                                selected={value}
                              />
                            );
                          }}
                        />
                        {errors.join_Date && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Date Of Birth
                          </p>
                        )}
                      </FormGroup>
                    </Col>

                    <Col className="pr-md-1" md="4">
                      <label style={{ fontSize: "15px" }}>
                        Upload Adhar Card
                      </label>
                      <Controller
                        name="AdharCard"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, files } }) => {
                          return (
                            <div class="upload-btn-wrapper">
                              <button class="file-btn">Upload</button>
                              <Input
                                id="exampleFile"
                                type="file"
                                accept="application/pdf"
                              />
                            </div>
                          );
                        }}
                      />
                      {errors.Diet_Plan && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                          }}
                        >
                          {" "}
                          Diet Plan is Required
                        </p>
                      )}
                    </Col>
                  </Row>
                  <Button color="info">Add</Button>{" "}
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <CardTitle tag="h4">Clients List</CardTitle>
              </CardHeader>

              <CardBody>
                {/* <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>S.NO.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Date Of Birth</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords
                      .filter((key) =>
                        key.firstName.toLocaleLowerCase().includes(`${""}`)
                      )
                      .map((client) => (
                        <tr>
                          <td>{client.id}</td>
                          <td>
                            {client.firstName} {client.lastName}
                          </td>
                          <td>{client.Email}</td>
                          <td>{client.phone}</td>

                          <td>{client.Date_Of_Birth}</td>

                          <td>
                            <MdOutlineModeEditOutline
                              style={{
                                fontSize: "20px",
                                color: "#BEE64B",
                                cursor: "pointer",
                              }}
                            />{" "}
                            &nbsp;
                            <MdDeleteForever
                              style={{
                                fontSize: "23px",
                                color: "#CC3336",
                                cursor: "pointer",
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table> */}

                <TableList tablehead={TableHead} data={currentRecords} />
              </CardBody>

              <Pagination style={{ float: "right" }}>
                <PaginationItem>
                  <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem
                  onClick={() => {
                    if (currentPage != 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                >
                  <PaginationLink href="#" previous />
                </PaginationItem>
                {pagenumber.map((event, index) => (
                  <PaginationItem
                    key={index}
                    onClick={() => {
                      setCurrentPage(event);
                    }}
                  >
                    <PaginationLink href="#">{event}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem
                  onClick={() => {
                    if (nPages > currentPage) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  <PaginationLink href="#" next />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" last />
                </PaginationItem>
              </Pagination>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Helper;
