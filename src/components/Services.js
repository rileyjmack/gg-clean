import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Background from "../WoodBackground.jpg";
import Cleaning from "../cleaning.jpg";
import "../Services.css";

export default class Services extends Component {
  render() {
    return (
      <div
        className="everything"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {" "}
        <Fragment>
          <div>
            <Fragment>
              <div className="d-flex flex-row">
                <img src={Cleaning} width="50%" height="50%" className="p-5" />
                <div>
                  <p className="Title">
                    Because cleanliness and safety matter more than ever before.
                  </p>
                  <p className="Paragraph">
                    {" "}
                    Our standard Residential service includes all bedrooms,
                    bathrooms, kitchen area (inside appliances are extra),
                    family rooms, and other shared spaces in your home. In
                    addition, we offer Post-construction deep-clean service to
                    clients after all construction has been finished on new
                    renovation projects. Please note, we do not clean hazardous
                    materials, please speak with your contractor about removal
                    before our arrival. For our Commercial clients we offer a
                    range of services for a fixed bi-weekly or monthly rate.
                    Please schedule a walk through of your business for a
                    personal quote. Lastly our Move in / Move out service
                    includes all bedrooms, bathrooms, kitchen area, family room,
                    and other shared spaces of a vacant home. Add-ons are
                    available for all of our services, please see our complete
                    list below.
                  </p>
                </div>
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
