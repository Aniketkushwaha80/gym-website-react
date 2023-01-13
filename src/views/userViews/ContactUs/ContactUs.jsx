import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <div className="container-img">
        <img
          style={{ width: "100%", height: "700px" }}
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="img-body">
          <h1
          id="plane-text-heading-h1"
            style={{
                
              color: "white",
              
              fontWeight: "600",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            CONTACT <span style={{ color: "rgb(173,255,47)" }}>US</span>
          </h1>

          <div className="contact-container">
            <p className="contact-child">
              <MDBIcon
                style={{ color: "rgb(173,255,47)" }}
                icon="phone"
                className="me-3"
              />
              <span> + 01 234 567 88</span>
            </p>
            <p className="contact-child">
              <MDBIcon
                style={{ color: "rgb(173,255,47)" }}
                icon="print"
                className="me-3"
              />
              <span> + 01 234 567 89</span>
            </p>

            <p className="contact-child">
              <MDBIcon
                style={{ color: "rgb(173,255,47)" }}
                icon="envelope"
                className="me-3"
              />
              <span> info@example.com</span>
            </p>

            <p className="contact-child">
              <MDBIcon
                style={{ color: "rgb(173,255,47)" }}
                icon="home"
                className="me-2"
              />
              <span>
                {" "}
                New York, NY 10012 Behind Indene Gas Goadown Purani basti
                shahdol
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
