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
                Residential Cleaning:
                <form>
                  <label>
                    <input type="text" name="firstName" value="First Name" />
                  </label>
                </form>
                <form>
                  <label>
                    <input type="text" name="lastName" value="Last Name" />
                  </label>
                </form>
                <form>
                  <label>
                    <input type="text" name="address" value="Address" />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="bathrooms"
                      value="Number of Bathrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="bedrooms"
                      value="Number of Bedrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="livingRooms"
                      value="Number of Living Rooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <select>
                      <option value="what service?">
                        What Service Are You Interested In?
                      </option>
                      <option value="office clean">Office Cleaning</option>
                      <option value="house clean">House Cleaning</option>
                      <option value="power cleaning">Power Cleaning</option>
                      <option value="post-construction cleaning">
                        Post-Construction Cleaning
                      </option>
                    </select>
                  </label>
                </form>
                <input type="submit" value="Submit" />
                Residential Cleaning:
                <form>
                  <label>
                    <input type="text" name="firstName" value="First Name" />
                  </label>
                </form>
                <form>
                  <label>
                    <input type="text" name="lastName" value="Last Name" />
                  </label>
                </form>
                <form>
                  <label>
                    <input type="text" name="address" value="Address" />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="bathrooms"
                      value="Number of Bathrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="bedrooms"
                      value="Number of Bedrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      type="text"
                      name="livingRooms"
                      value="Number of Living Rooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <select>
                      <option value="what service?">
                        What Service Are You Interested In?
                      </option>
                      <option value="office clean">Office Cleaning</option>
                      <option value="house clean">House Cleaning</option>
                      <option value="power cleaning">Power Cleaning</option>
                      <option value="post-construction cleaning">
                        Post-Construction Cleaning
                      </option>
                    </select>
                  </label>
                </form>
                <input type="submit" value="Submit" />
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
