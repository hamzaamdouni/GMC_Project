import axios from "axios";
import {
  ADD_COMMENT,
  ADD_DEMANDE,
  CURRENT_AGENT,
  CURRENT_USER,
  FAIL_COMMENT,
  FAIL_DATA,
  FAIL_DEMANDE,
  GET_AGENTS_CATEGORYS,
  GET_AGENTS_SERVICES,
  GET_AGENT_COMMENTS,
  GET_AGENT_DEMANDES,
  GET_ALL_AGENTS,
  GET_CATEGORY,
  GET_ONE_AGENT,
  GET_ONE_CATEGORY,
  GET_ONE_SERVICE,
  GET_SERVICES,
  GET_USER_COMMENTS,
  GET_USER_DEMANDES,
  GET_VERIFIED_COMMENT,
  LOAD_AGENTS,
  LOAD_COMMENT,
  LOAD_DATA,
  LOAD_DEMANDE,
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

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/visiteur/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
    history.push("/services");
  } catch (error) {
    // dispatch({ type: FAIL_DATA, payload: error.response.data });
    error.response.data.errors.map((el) => alert(el.msg));
    // console.log(error);
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

export const getallagents = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_AGENTS });
  try {
    let { data } = await axios.get(`/api/user/allagents`, config);
    dispatch({ type: GET_ALL_AGENTS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response });
  }
};

export const getallagentService = (service) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_AGENTS });
  try {
    let { data } = await axios.get(
      `/api/user/agents/service/${service}`,
      config
    );
    dispatch({ type: GET_AGENTS_SERVICES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getallagentCategory = (category) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_AGENTS });
  try {
    let { data } = await axios.get(
      `/api/user/agents/category/${category}`,
      config
    );
    dispatch({ type: GET_AGENTS_CATEGORYS, payload: data });
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

export const deleteUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/user/profil`, config);
    dispatch(logout());
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const editCurrentUser = (editUser) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/user/profil`, editUser, config);
    dispatch(current());
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getdemandeUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DEMANDE });
  try {
    let { data } = await axios.get("/api/user/demande", config);
    dispatch({ type: GET_USER_DEMANDES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response });
  }
};

export const getcommentUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_COMMENT });
  try {
    let { data } = await axios.get("/api/user/comment", config);
    dispatch({ type: GET_USER_COMMENTS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_COMMENT, payload: error.response });
  }
};

export const deleteDemandeUser = (iddemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/user/demande/${iddemande}`, config);
    dispatch(getdemandeUser());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response.data });
  }
};

export const editdemandeUser = (iddemande, editDemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/user/demande/${iddemande}`, editDemande, config);
    dispatch(getdemandeUser());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response.data });
  }
};
/******************************************************** agent  ********************************************************/
export const registerAgent = (addAgent, history) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.post("/api/agent/register", addAgent, config);
    dispatch({ type: REGISTER_USER, payload: data });
    history.push("/services");
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const currentAgent = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DATA });
  try {
    let { data } = await axios.get(`api/agent/profil`, config);
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
export const editCurrentAgent = (editAgent) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/agent/profil`, editAgent, config);
    dispatch(currentAgent());
  } catch (error) {
    dispatch({ type: FAIL_DATA, payload: error.response.data });
  }
};

export const getdemandeAgent = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_DEMANDE });
  try {
    let { data } = await axios.get(`/api/agent/demande`, config);
    dispatch({ type: GET_AGENT_DEMANDES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response });
  }
};

export const getcommentAgent = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_COMMENT });
  try {
    let { data } = await axios.get("/api/agent/comment", config);
    dispatch({ type: GET_AGENT_COMMENTS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_COMMENT, payload: error.response });
  }
};

export const editdemande = (iddemande, editDemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/agent/demande/${iddemande}`, editDemande, config);
    dispatch(getdemandeAgent());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response.data });
  }
};

export const deleteDemandeAgent = (iddemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/agent/demande/${iddemande}`, config);
    dispatch(getdemandeAgent());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDE, payload: error.response.data });
  }
};

export const editcommentagent = (idcomment, isVerfied) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/agent/comment/${idcomment}`, isVerfied, config);
    dispatch(getcommentAgent());
  } catch (error) {
    dispatch({ type: FAIL_COMMENT, payload: error.response.data });
  }
};

export const deleteCommentAgent = (iddemande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/agent/comment/${iddemande}`, config);
    dispatch(getcommentAgent());
  } catch (error) {
    dispatch({ type: FAIL_COMMENT, payload: error.response.data });
  }
};
