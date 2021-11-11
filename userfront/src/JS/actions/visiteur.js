import axios from "axios";
import {
  ADD_COMMENT,
  ADD_DEMANDE,
  CURRENT_AGENT,
  CURRENT_USER,
  FAIL_DATA,
  GET_ALL_AGENTS,
  GET_CATEGORY,
  GET_DEMANDE_CLIENT,
  GET_ONE_AGENT,
  GET_ONE_CATEGORY,
  GET_ONE_SERVICE,
  GET_SERVICES,
  GET_VERIFIED_COMMENT,
  LOAD_DATA,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SEND_RECLAMATION,
} from "../constants/visiteur";

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/visiteur/register", newUser);
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const login = (user, hisory) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/visiteur/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
    hisory.push("/services");
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get("/api/user/profil", config);
    dispatch({ type: CURRENT_USER, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response });
  }
};

export const reclamation = (newReclamation) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    console.log(newReclamation);
    let { data } = await axios.post(
      "/api/visiteur/addreclamation",
      newReclamation
    );
    dispatch({ type: SEND_RECLAMATION, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getservices = () => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get("/api/visiteur/services");
    dispatch({ type: GET_SERVICES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getCategory = (service) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`/api/visiteur/category/${service}`);
    dispatch({ type: GET_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

/******************************************************** User  ********************************************************/
export const getallagents = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`/api/user/allagents`, config);
    dispatch({ type: GET_ALL_AGENTS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getoneagent = (idagent) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`/api/user/agent/${idagent}`, config);
    dispatch({ type: GET_ONE_AGENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const addcomment = (newComment) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/user/comment", newComment, config);
    dispatch({ type: ADD_COMMENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getverifiedcomment = (idagent) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`/api/user/comment/${idagent}`, config);
    dispatch({ type: GET_VERIFIED_COMMENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const addDemande = (newDemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/user/demande", newDemande, config);
    dispatch({ type: ADD_DEMANDE, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};
/******************************************************** agent  ********************************************************/

export const currentAgent = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`api/agent/profil/${id}`, config);
    dispatch({ type: CURRENT_AGENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const oneservice = (idService) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`api/agent/service/${idService}`);
    dispatch({ type: GET_ONE_SERVICE, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const onecategory = (idcategory) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`api/agent/category/${idcategory}`);
    dispatch({ type: GET_ONE_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

/******************************************************** Clients  ********************************************************/

export const getdemandeclient = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get("/api/user/demande/", config);
    dispatch({ type: GET_DEMANDE_CLIENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response });
  }
};
