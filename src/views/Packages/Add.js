import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

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
  Col,
  Label,
  Alert,
} from "reactstrap";
import PdfView from "../Charts/Add";

function AddNewPackage() {
  const [formData, setFormData] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      package: "",
      amount: "",
    },
  });

  const onSubmit = (data) => setFormData(data);
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add New Package</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row></Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label style={{ fontSize: "15px" }}>Package</label>
                      <Controller
                        name="package"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Input
                              type="select"
                              placeholder="Package"
                              onChange={onChange}
                              selected={value}
                              style={{ backgroundColor: "rgb(39,41,61)" }}
                            >
                              <option value="1 Month plan">1 Month Plan</option>

                              <option value="2 Month plan">2 Month Plan</option>

                              <option value="3 Month plan">3 Month Plan</option>

                              <option value="4 Month plan">4 Month Plan</option>

                              <option value="5 Month plan">5 Month Plan</option>

                              <option value="6 Month plan">6 Month Plan</option>

                              <option value="7 Month plan">7 Month Plan</option>

                              <option value="8 Month plan">8 Month Plan</option>
                              <option value="9 Month plan">9 Month Plan</option>

                              <option value="10 Month plan">
                                10 Month Plan
                              </option>

                              <option value="11 Month plan">
                                11 Month Plan
                              </option>
                              <option value="1 Year plan">1 Year Plan</option>
                            </Input>
                          );
                        }}
                      />
                      {errors.package && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "-14px",
                          }}
                        >
                          {" "}
                          Package is Required
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label style={{ fontSize: "15px" }}>Amount</label>

                      <Controller
                        name="amount"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Input
                              type="number"
                              placeholder=" Amount"
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
                      {errors.amount && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "-14px",
                          }}
                        >
                          {" "}
                          Amount is Required
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
    </div>
  );
}

export default AddNewPackage;
