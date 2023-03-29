import React, { Component, Fragment } from "react";
import BackgroundPic from "../Background.jpg";
import WoodBackground from "../WoodBackground.jpg";
import Logo from "../logo.jpg";
import Navb from "../components/Navb";
import livingRoom from "../livingRoom.jpg";
import livingRoom2 from "../livingRoom2.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import Formy from "./Formy";

import { Parallax, Background } from "react-parallax";

const Home = () => {
  return (
    <div>
      <Navb />
      <div>
        <Parallax
          bgImage={BackgroundPic}
          strength={500}
          blur={{ min: -1, max: 1 }}
        >
          {" "}
          <div style={{ height: 1500 }}>
            <div></div>
          </div>
        </Parallax>
        <Parallax bgImage={WoodBackground} strength={500}>
          <div>
            <div className="row m-auto">
              <div className="col">
                <img
                  src={livingRoom}
                  alt="livingroom"
                  width="100%"
                  padding="50"
                />
                <figcaption className="figure-caption">
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
                <figcaption className="figure-caption">
                  Get Good Cleaning is dedicated to a clean and healthy work
                  environment for your employees, customers, and visitors. We
                  provide a premium cleaning service to business of all sizes.
                  We are fully bonded, licensed and insured. Get Good Cleaning
                  guarantees that your premises are in reliable and safe hands.
                  We strive to exceed your expectations with every job we do.
                </figcaption>
              </div>
            </div>
          </div>
          <div>
            <Formy />
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Home;
