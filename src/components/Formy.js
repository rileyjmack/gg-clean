import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { connect } from "react-redux";
import { createClient } from "../store/clientReducer";

const Formy = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createClient({ formData });
    navigate("/formSubmission");
  };

  return (
    <div className="d-flex flex-row ">
      <div>
        <div className="form-group bg-img " id="form">
          Request a Quote:
          <form onSubmit={handleSubmit}>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  value={formData.firstName}
                  id="firstName"
                  label="First name"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  value={formData.lastName}
                  id="lastName"
                  label="Last Name"
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              value={formData.companyName}
              wrapperClass="mb-4"
              id="companyName"
              label="Company name"
            />
            <MDBInput wrapperClass="mb-4" id="address" label="Address" />
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              wrapperClass="mb-4"
              type="email"
              id="email"
              label="Email"
            />
            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              value={formData.phoneNumber}
              wrapperClass="mb-4"
              type="tel"
              id="phoneNumber"
              label="Phone Number"
            />

            <MDBInput
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              value={formData.comments}
              wrapperClass="mb-4"
              textarea="true"
              id="comments"
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
  );
};

const mapDispatch = (dispatch) => ({
  createClient: (client) => dispatch(createClient(client)),
});

export default connect(null, mapDispatch)(Formy);
