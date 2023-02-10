import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Background from "../WoodBackground.jpg";

export default class Services extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {" "}
        <Fragment>
          <div style={styles.block}>
            <Fragment>
              <div>
                <p style={styles.title}>
                  We Don't Take You Where You Need To Go
                </p>
                <p style={styles.title}>...</p>
                <h1 style={styles.title}>We Take You Where You Want To Go</h1>
                <p style={styles.title2} className="Paragraph">
                  {" "}
                  Welcome to Open Road. We Created This Website With One Mission
                  In Mind: To Help Motorcyclists Find The Safest And Most Scenic
                  Routes Available. Using MapBox GL Technologies, Any One Can
                  Plan Their Next Road Trip While Not Having To Worry About
                  Avoiding Highways And Unsafe Riding Conditions. Additional
                  Features Include Saving Your Favorite Trips and Exploring Our
                  Most Popular Trips and News Aggregate Below.
                </p>
              </div>
            </Fragment>
          </div>
        </Fragment>
      </div>
    );
  }
}
// class Services extends Component {
//   render() {
//     return (
//       <div>
//         <img src={Background} width="100%" height="100%" />
//       </div>
//     );
//   }
// }

const styles = {
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background: "#1f2937",
    borderBottom: "1px solid rgba(255,255,255,.2)",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
  },
  title2: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: 100,
  },
};
