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

function UserProfile() {
  const [formData, setFormData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [amount, SetAmount] = useState(0);
  const [TrainerAmount, SetTrainerAmount] = useState(0);
  var total = parseInt(amount) 
  if(toggle){
    total = parseInt(amount) + parseInt(TrainerAmount);
  }
  
  console.log(total);
  console.log(formData);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      Dob: "",
      fitness_Goal: "",
      membership: "",
      total_amount: "",
      coupon: "",
      persnal_training: "",
      join_Date: "",
      end_Date: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    setFormData(data);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Add Client</h5>
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
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="text"
                                autoComplete="none" 
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
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="text"
                                autoComplete="none" 
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
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="email"
                               autoComplete="none" 
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
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="number"
                                autoComplete="none" 
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
                          name="Dob"
                          control={control}
                          rules={{required:true}}
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
                        {errors.Dob && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Date Of birth is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Fitness Goal</label>

                        <Controller
                          name="fitness_Goal"
                          control={control}
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="select"
                                onChange={onChange}
                                selected={value}
                                style={{ backgroundColor: "rgb(39,41,61)" }}
                              >
                                <option value="">--</option>
                                <option>Bodybuilding</option>
                                <option>Fat Loss</option>
                                <option>Weight Loss</option>
                                <option>Weight Gain</option>
                              </Input>
                            );
                          }}
                        />
                        {errors.fitness_Goal && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Fitness Goal is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Membership</label>
                        <Controller
                          name="membership"
                          control={control}
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="select"
                                onChange={(e) => {
                                  setValue("membership", e.target.value);
                                  SetAmount(e.target.value);
                                }}
                                selected={value}
                                style={{ backgroundColor: "rgb(39,41,61)" }}
                              >
                                <option value="">--</option>
                                <option value={1000}>
                                  1 Month Plan (₹1000)
                                </option>
                                <option value={2000}>
                                  2 Month Plan (₹2000)
                                </option>
                                <option value={2500}>
                                  3 Month Plan (₹2500)
                                </option>
                                <option value={3500}>
                                  5 Month Plan (₹3500)
                                </option>
                                <option value={4500}>
                                  6 Month Plan (₹4500)
                                </option>
                                <option value={5000}>
                                  1 Year Plan (₹5000)
                                </option>
                              </Input>
                            );
                          }}
                        />
                        {errors.membership && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Membership is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Total Amount</label>

                        <Controller
                          name="total_amount"
                          control={control}
                         
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                type="number"
                                onChange={(e) => {
                                  SetAmount(e.target.value);
                                }}
                                value={total == 0 ? "" : total}
                              />
                            );
                          }}
                        />
                        {errors.total_amount && (
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

                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>
                          Apply Coupon{" "}
                        </label>
                        <Controller
                          name="coupon"
                          control={control}
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
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Reference</label>
                        <Controller
                          name="reference"
                          control={control}
                          rules={{
                            required: false,
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
                        {errors.reference && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            Reference is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Join Date</label>

                        <Controller
                          name="join_Date"
                          control={control}
                          rules={{required:true}}
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
                            Join Date is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>End Date</label>

                        <Controller
                          name="end_Date"
                          control={control}
                          rules={{required:true}}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                style={{ colorScheme: "dark" }}
                                type="date"
                                onChange={onChange}
                                selected={value}
                                placeholderText="Enter your birth date"
                              />
                            );
                          }}
                        />
                        {errors.end_Date && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            {" "}
                            End Date is Required
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>
                          Persnal Training
                        </label>

                        <div>
                          <label class="switch">
                            <input
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                              type="checkbox"
                            />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </FormGroup>
                    </Col>

                    {toggle ? (
                      <>
                        <Col className="pr-md-1" md="4">
                          <label style={{ fontSize: "15px" }}>
                            Upload Diet Plan
                          </label>
                          <Controller
                            name="Diet_Plan"
                            control={control}
                            rules={{required:true}}
                            render={({ field: { onChange, files } }) => {
                              return (
                                <div class="upload-btn-wrapper">
                                  <button class="file-btn">Upload pdf</button>
                                  <Input
                                    id="exampleFile"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(event) =>
                                      setValue(
                                        "chartFile",
                                        event.target.files[0]
                                      )
                                    }
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

                        <Col className="pr-md-1" md="4">
                          <label style={{ fontSize: "15px" }}>
                            Upload Workout Plan
                          </label>
                          <Controller
                            name="Workout_Plan"
                            control={control}
                            rules={{required:true}}
                            render={({ field: { onChange, files } }) => {
                              return (
                                <div class="upload-btn-wrapper">
                                  <button class="file-btn">Upload pdf</button>
                                  <Input
                                    id="exampleFile"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(event) =>
                                      setValue(
                                        "chartFile",
                                        event.target.files[0]
                                      )
                                    }
                                  />
                                </div>
                              );
                            }}
                          />
                          {errors.Workout_Plan && (
                            <p
                              style={{
                                fontSize: "10px",
                                color: "red",
                              }}
                            >
                              {" "}
                              Workout Plan is Required
                            </p>
                          )}
                        </Col>
                        <Col className="pr-md-1" md="4">
                          <FormGroup>
                            <label style={{ fontSize: "15px" }}>
                              Choose Trainer
                            </label>
                            <Controller
                              name="Trainer"
                              control={control}
                              rules={{required:true}}
                              render={({ field: { onChange, value } }) => {
                                return (
                                  <Input
                                    type="select"
                                    onChange={(e) => {
                                     SetTrainerAmount(e.target.value);
                                       setValue("total_amount", total);
                                    }}
                                    selected={value}
                                    style={{ backgroundColor: "rgb(39,41,61)" }}
                                  >
                                    <option value="">--</option>
                                    <option value="5000">
                                      Aniket kushwaha (₹5000 per Month)
                                    </option>

                                    <option value="8000">
                                      Aditiya Raj (₹8000 per month)
                                    </option>
                                  </Input>
                                );
                              }}
                            />
                            {errors.Trainer && (
                              <p
                                style={{
                                  fontSize: "10px",
                                  color: "red",
                                  marginTop: "-14px",
                                }}
                              >
                                {" "}
                                Trainer is Required
                              </p>
                            )}
                          </FormGroup>
                        </Col>
                      </>
                    ) : (
                      ""
                    )}
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="12">
                      <FormGroup>
                        <label style={{ fontSize: "15px" }}>Address</label>

                        <Controller
                          name="address"
                          control={control}
                          rules={{required:true}
                          
                          }
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Input
                                cols="80"
                                rows="4"
                                type="textarea"
                               autoComplete="none" 
                                onChange={(e) => {
                    
                                  setValue("address", e.target.value);
                                                setValue("total_amount", total);
                                }}
                              />
                            );
                          }}
                        />
                        {errors.address && (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "red",
                              marginTop: "-14px",
                            }}
                          >
                            Address is Required
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
    </>
  );
}

export default UserProfile;
