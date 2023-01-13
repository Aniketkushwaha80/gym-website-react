import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// Import the main component

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

export const PdfCharts = () => {
  const [plan, setPlan] = useState([]);

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // Pdf View
  const PdfView = (pdfData) => {
    const fileType = ["application/pdf"];

    let selectedFile = pdfData;

    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          const pdfvalue = e.target.result;
          if (pdfvalue !== null) {
            setViewPdf(pdfvalue);
          } else {
            setViewPdf(null);
          }
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      chart_Category: "",
      Fitness_Goal: "",
      chartFile: "",
    },
  });

  const onSubmit = (data) => {
    setPlan([...plan, data]);
    PdfView(data.chartFile);
  };

  console.log(viewPdf);

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <CardHeader>
                <h5 className="title">Upload Chart</h5>
              </CardHeader>
              <br />

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row></Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <Controller
                        name="chart_Category"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Input
                              type="select"
                              onChange={onChange}
                              selected={value}
                              style={{ backgroundColor: "rgb(39,41,61)" }}
                            >
                              <option value="">category</option>
                              <option value="diet plan">Diet Plan</option>

                              <option value="exercise plan">
                                Exercise Plan
                              </option>
                            </Input>
                          );
                        }}
                      />
                      {errors.chart_Category && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "2px",
                          }}
                        >
                          {" "}
                          Chart Category is Required
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <Controller
                        name="Fitness_Goal"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Input
                              type="select"
                              onChange={onChange}
                              selected={value}
                              style={{ backgroundColor: "rgb(39,41,61)" }}
                            >
                              <option>Bodybuilding</option>
                              <option>Fat Loss</option>
                              <option>Weight Loss</option>
                              <option>Weight Gain</option>
                            </Input>
                          );
                        }}
                      />
                      {errors.Fitness_Goal && (
                        <p
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginTop: "2px",
                          }}
                        >
                          {" "}
                          Fitness_Goal is Required
                        </p>
                      )}
                    </FormGroup>
                  </Col>

                  <Col className="pr-md-1" md="4">
                    <Controller
                      name="chartFile"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, files } }) => {
                        return (
                          <div class="upload-btn-wrapper">
                            <button class="file-btn">Upload a file</button>
                            <Input
                              id="exampleFile"
                              type="file"
                              accept="application/pdf"
                              onChange={(event) =>
                                setValue("chartFile", event.target.files[0])
                              }
                            />
                          </div>
                        );
                      }}
                    />
                    {errors.chartFile && (
                      <p
                        style={{
                          fontSize: "10px",
                          color: "red",
                        }}
                      >
                        {" "}
                        File is Required
                      </p>
                    )}
                  </Col>

                  <Col className="pr-md-1" md="1">
                    <br />
                    <Button
                      style={{ transform: "scale(0.9", paddingBottom: "10%" }}
                    >
                      Add
                    </Button>{" "}
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {plan.length ? (
        <>
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 style={{ fontSize: "20px" }} className="title">
                    Diet Plan
                  </h5>
                </CardHeader>

                <CardBody>
                  <Col className="pr-md-1" md="12">
                    <ul
                      style={{
                        fontSize: "17px",
                        letterSpacing: "0.7px",
                        fontWeight: "200",
                      }}
                    >
                      {plan
                        ? plan.map((e) => (
                            <>
                              {e.chart_Category == "diet plan" ? (
                                <>
                                  <li
                                    style={{
                                      marginBottom: "10px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {e.Fitness_Goal} {e.chartFile.name}
                                  </li>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          ))
                        : ""}
                    </ul>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 style={{ fontSize: "20px" }} className="title">
                    Workout Plan
                  </h5>
                </CardHeader>

                <CardBody>
                  <Col className="pr-md-1" md="12">
                    <ul
                      style={{
                        fontSize: "17px",
                        letterSpacing: "0.7px",
                        fontWeight: "200",
                      }}
                    >
                      {plan
                        ? plan.map((e) => (
                            <>
                              {e.chart_Category == "exercise plan" ? (
                                <>
                                  <li
                                    style={{
                                      marginBottom: "10px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {e.Fitness_Goal} {e.chartFile.name}
                                  </li>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          ))
                        : ""}
                    </ul>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}

      {/* <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h2 style={{fontSize:"17px"}} className="card-category"> {plan.Fitness_Goal} {plan.chart_Category}</h2>
               
              </CardHeader>
              <CardBody>
                <div  className="chart-area">
                
                 
      <div className='pdf-container'>
     
        
        {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
        </Worker></>}

        {!viewPdf && <>No pdf file selected</>}
    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
              
              </CardHeader>
              <CardBody>
                <a href={viewPdf}>hyy</a>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
              
              </CardHeader>
              <CardBody>
                <div className="chart-area"></div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
    </div>
  );
};

export default PdfCharts;
