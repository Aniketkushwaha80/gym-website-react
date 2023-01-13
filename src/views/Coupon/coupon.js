import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TableList from "components/shared/Table/TableList";

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

const AddCoupon = () => {
  const [formData, setFormData] = useState([]);

  const TableHead = ["Coupon price", "Coupon Code", "Action"];
  const [clients, setClients] = useState([
    {
      id: 1,
      Couponprice: "56222",
      CouponCode: "mcslmcsa",
    },
    {
      id: 2,
      Couponprice: "4168132",
      CouponCode: "mlm14dwe4d",
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      couponPrice : "",
      couponCode : "",
    },
  });

  const onSubmit = (data) => setFormData(data);
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add New Coupon</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row></Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label style={{ fontSize: "15px" }}>coupon price</label>
                      <Controller
                        name="couponPrice"
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
                              style={{ backgroundColor: "rgb(39,41,61)" }}
                            ></Input>
                          );
                        }}
                      />
                      {errors.couponPrice && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "-14px",
                          }}
                        >
                          {" "}
                         Coupon Price is Required
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label style={{ fontSize: "15px" }}>Coupon Code</label>

                      <Controller
                        name="couponCode"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Input
                              type="text"
                              value={
                                formData.total_amount
                                  ? formData.total_amount
                                  : formData.Package
                              }
                              onChange={onChange}
                              selected={value}
                            />
                          );
                        }}
                      />
                      {errors.couponCode && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "-14px",
                          }}
                        >
                          {" "}
                          Coupon Code is Required
                        </p>
                      )}
                    </FormGroup>
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
              <CardTitle tag="h4">Coupon List</CardTitle>
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
  );
};

export default AddCoupon;
