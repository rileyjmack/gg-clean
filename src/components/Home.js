import React, { Component, Fragment } from "react";
import Background from "../Background.jpg";
import Fade from "react-reveal/Fade";
import Logo from "../logo.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Fade top>
            <img src={Background} width="100%" height="100%" />
          </Fade>
          <div style={styles.block}>
            <Fragment>
              <img src={Logo} height="200" className="p-5" />
              <div className="p-5">
                {" "}
                It is our privilege to present The Luxury Clean (TLC), a
                cleaning and home service company dedicated to creating and
                maintaining a safe and hygienic environment for our clients. In
                addition to raising the standard of white glove cleaning, our
                mission is to improve our community by offering a professional,
                trustworthy, and tailored cleaning experience while creating
                meaningful relationships along the way.
              </div>
              {/* <div className="text-primary">
                <h1 className="display-1">HOME AND OFFICE CLEANING SERVICES</h1>
                <h2>LEAVE YOUR HOME CLEANING TO US AND WIN TIME</h2>
                <ul className="text-secondary">
                  <li>
                    BOOK ONLINE Select the date and time you’d like your
                    cleaning professional to show up.
                  </li>
                  <li>
                    WE CLEAN A certified cleaner comes over and cleans your
                    place.
                  </li>
                  <li>
                    YOU RELAX Sit back and relax. Enjoy your sparkling home!
                  </li>
                </ul>
                <h2>
                  KEY FEATURES OF OUR HOME CLEANING SERVICES FOR THE DMV REGION
                </h2>
              </div> */}
            </Fragment>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Home;
const styles = {
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background: "#FFFFFF",
    borderBottom: "1px solid rgba(255,255,255,.2)",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
  },
  title2: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFFFFF",
    fontFamily: "Lato, sans-serif",
    fontWeight: 100,
  },
};
