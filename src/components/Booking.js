import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Background from "../WoodBackground.jpg";

export default class Booking extends Component {
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
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
                <form>
                  <label>
                    Address:
                    <input type="text" name="address" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Cleaning Type
                    <select>
                      <option value="office clean">office clean</option>
                      <option value="house clean">house clean</option>
                      <option value="power cleaning">power cleaning</option>
                      <option value="post-construction cleaning">
                        post-construction cleaning
                      </option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
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
    borderBottom: "1px solid rgba(255,255,255,.2)",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#000",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
  },
  title2: {
    textAlign: "center",
    fontSize: 25,
    color: "#000",
    fontFamily: "Lato, sans-serif",
    fontWeight: 100,
  },
};
