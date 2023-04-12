import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/clientsReducer";
import { useQuery } from "ihp-datasync/ihp-datasync-react";
import { query } from "ihp-datasync/ihp-querybuilder";

import "../Services.css";

const Services = (props) => {
  useEffect(() => props.getClients, []);
  console.log(useQuery(query("clients").orderBy("createdAt")));
  const clients = useQuery(query("clients").orderBy("createdAt"));
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
