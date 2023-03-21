import React, { Component, Fragment } from "react";
import BackgroundPic from "../Background.jpg";
import WoodBackground from "../WoodBackground.jpg";
import Logo from "../logo.jpg";
import Navb from "../components/Navb";
import livingRoom from "../livingRoom.jpg";
import livingRoom2 from "../livingRoom2.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Parallax, Background } from "react-parallax";

class Home extends Component {
  render() {
    return (
      <div>
        <Navb />
        <div>
          <Parallax bgImage={BackgroundPic} strength={500}>
            {" "}
            <div style={{ height: 1500 }}>
              <div></div>
            </div>
          </Parallax>
          <Parallax>
            <div className="row m-auto">
              <div className="col">
                <img
                  src={livingRoom}
                  alt="livingroom"
                  width="100%"
                  padding="50"
                />
                <figcaption class="figure-caption">
                  Get Good Cleaning services works to give you a spotless home.
                  Whether you need standard, deep cleaning, post-construction or
                  moving in/out cleaning, we will creating a plan tha fits your
                  schedule and budget. We value our clients and aim to build
                  long-lasting relationships based on trust, integrity and
                  exceptional service.
                </figcaption>
              </div>
              <div className="col">
                <img
                  src={livingRoom2}
                  alt="livingroom2"
                  width="100%"
                  padding="50"
                />
                <figcaption class="figure-caption">
                  Get Good Cleaning is dedicated to a clean and healthy work
                  environment for your employees, customers, and visitors. We
                  provide a premium cleaning service to business of all sizes.
                  We are fully bonded, licensed and insured. Get Good Cleaning
                  guarantees that your premises are in reliable and safe hands.
                  We strive to exceed your expectations with every job we do.
                </figcaption>
              </div>
            </div>
          </Parallax>
        </div>
        <div>
          <Parallax bgImage={WoodBackground} strength={500}>
            <div className="d-flex flex-row ">
              <div>
                <div className="form-group bg-img ">
                  Request a Quote:
                  <form>
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBInput id="form6Example1" label="First name" />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput id="form6Example2" label="Last name" />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example3"
                      label="Company name"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example4"
                      label="Address"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      type="email"
                      id="form6Example5"
                      label="Email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      type="tel"
                      id="form6Example6"
                      label="Phone"
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      textarea
                      id="form6Example7"
                      rows={4}
                      label="Additional information About Your Needs"
                    />

                    <MDBBtn className="mb-4" type="submit" block>
                      Get a Quote!
                    </MDBBtn>
                  </form>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Home;
