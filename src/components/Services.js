import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/clientsReducer";

import "../Services.css";

const Services = (props) => {
  useEffect(() => props.getClients, []);
  return (
    <div>
      {props.clients.map((client) => (
        <ul>
          <li key={client.id}>{client.firstName}</li>
          <li key={client.id}>{client.lastName}</li>
          <li key={client.id}>{client.companyName}</li>
          <li key={client.id}>{client.comments}</li>
          <li key={client.id}>{client.phoneNumber}</li>
          <li key={client.id}>{client.email}</li>
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
