import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/clientsReducer";

import "../Services.css";

const Services = (props) => {
  useEffect(() => props.getClients, []);
  return (
    <div>
      {props.clients.map((client) => (
        <ul key={client.id}>
          <li>{client.firstName}</li>
          <li>{client.lastName}</li>
          <li>{client.companyName}</li>
          <li>{client.comments}</li>
          <li>{client.phoneNumber}</li>
          <li>{client.email}</li>
        </ul>
      ))}
    </div>
  );
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
