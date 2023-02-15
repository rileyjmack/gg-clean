import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Maid from "../Maid.jpg";

export default class Booking extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.block} className="d-flex flex-row">
          <Fragment>
            <img src={Maid} height="500" className="p-5" />
            <div>
              <div className="form-group">
                Book With Us:
                <form>
                  <label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      className="form-control"
                      type="text"
                      name="bathrooms"
                      placeholder="Number of Bathrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      className="form-control"
                      type="text"
                      name="bedrooms"
                      placeholder="Number of Bedrooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <input
                      className="form-control"
                      type="text"
                      name="livingRooms"
                      placeholder="Number of Living Rooms"
                    />
                  </label>
                </form>
                <form>
                  <label>
                    <select className="form-control">
                      <option placeholder="what service?">
                        What Service Are You Interested In?
                      </option>
                      <option placeholder="office clean">
                        Office Cleaning
                      </option>
                      <option placeholder="house clean">House Cleaning</option>
                      <option placeholder="power cleaning">
                        Power Cleaning
                      </option>
                      <option placeholder="post-construction cleaning">
                        Post-Construction Cleaning
                      </option>
                    </select>
                  </label>
                </form>
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </Fragment>
        </div>
      </Fragment>
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
