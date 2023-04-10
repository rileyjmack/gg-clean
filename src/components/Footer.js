import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Services from "./Services";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                GG Clean
              </h6>
              <Link to={"/services"}>
                <div>Admin LogIn</div>
              </Link>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
              <p>
                <a
                  href="https://www.bark.com/en/us/company/get-good-cleaning/28BzY/"
                  className="text-reset"
                >
                  Leave a Review
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Facebook
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Brooklyn, NY 11213, USA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                bookggclean@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />1 (347) - 481 - 9759
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://GGclean.com/">
          GGclean.nyc
        </a>
      </div>
    </MDBFooter>
  );
}
