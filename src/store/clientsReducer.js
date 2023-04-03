//[X] build this store
import axios from "axios";

// ACTIONS
const SET_ALL_CLIENTS = "SET_ALL_CLIENTS";

// ACTION CREATORS

export const setAllClients = (clients) => {
  return {
    type: SET_ALL_CLIENTS,
    clients,
  };
};

// THUNK CREATORS

export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/clients");
      dispatch(setAllClients(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// INITIAL STATE
const initialState = [];

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CLIENTS:
      return action.clients;
    default:
      return state;
  }
}
