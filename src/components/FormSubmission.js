import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

const FormSubmission = () => {
  return (
    <div>
      <h1>Thank You For Your Request!</h1>
      <h2>Our Team Will Contact You Shortly Either Via Email or Phone</h2>
      <Link to={"/services"}>
        <div>HAN</div>
      </Link>
    </div>
  );
};

export default FormSubmission;
