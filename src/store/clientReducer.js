import axios from "axios";

const CREATE_CLIENT = "CREATE_CLIENT";

const _createClient = (client) => {
  return {
    type: CREATE_CLIENT,
    client,
  };
};

export const createClient = (client) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/clients", client);
      dispatch(_createClient(created));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CLIENT:
      return action.client;
    default:
      return state;
  }
}
