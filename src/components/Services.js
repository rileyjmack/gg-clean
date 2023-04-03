import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/clientsReducer";

import "../Services.css";

const Services = (props) => {
  useEffect(() => props.getClients);
  console.log(props);
  return <div>{props.clients}</div>;
};

const mapState = (state) => {
  return { clients: state.clients };
};

const mapDispatch = (dispatch) => {
  return {
    getClients: () => dispatch(fetchClients()),
  };
};

export default connect(mapState, mapDispatch)(Services);
