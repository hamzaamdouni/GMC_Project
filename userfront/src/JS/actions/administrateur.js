import axios from "axios";
import {
  ADD_CATEGORY,
  ADD_SERVICE,
  CURRENT_ADMIN,
  FAIL_ADMIN,
  FAIL_AGENT,
  FAIL_CATEGORY,
  FAIL_RECLAMATION,
  FAIL_SERVICE,
  FAIL_USER,
  GET_AGENT,
  GET_CATEGORY,
  GET_RECLAMATION,
  GET_SERVICE,
  GET_USER,
  LOAD_ADMIN,
  LOAD_AGENT,
  LOAD_CATEGORY,
  LOAD_RECLAMATION,
  LOAD_SERVICE,
  LOAD_USER,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../constants/administrateur";

/*---------------------------------  Administrateur ---------------------------------*/

export const LoginAdministrator = (admin, history) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let { data } = await axios.post("/api/admin/login", admin);
    dispatch({ type: LOGIN_ADMIN, payload: data });
    console.log(history);
    history.push("/admin/home");
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data });
  }
};

export const currentAdmin = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_ADMIN });
  try {
    let { data } = await axios.get("/api/admin/profil", config);
    dispatch({ type: CURRENT_ADMIN, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response });
  }
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT_ADMIN,
  };
};

/*--------------------------------- Reclamation  ---------------------------------*/

export const getReclamations = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_RECLAMATION });
  try {
    let { data } = await axios.get(`/api/admin/reclamation`, config);
    dispatch({ type: GET_RECLAMATION, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error.response.data });
  }
};

export const editReclamations = (id, editReclamation) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/reclamation/${id}`, editReclamation, config);
    dispatch(getReclamations());
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error.response.data });
  }
};

export const deleteReclamations = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/reclamation/${id}`, config);
    dispatch(getReclamations());
  } catch (error) {
    dispatch({ type: FAIL_RECLAMATION, payload: error.response.data });
  }
};

/*--------------------------------- Services ---------------------------------*/
export const getServices = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_SERVICE });
  try {
    let { data } = await axios.get(`/api/admin/allservice`, config);
    dispatch({ type: GET_SERVICE, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_SERVICE, payload: error.response.data });
  }
};

export const editServices = (id, editService) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/service/${id}`, editService, config);
    dispatch(getServices());
  } catch (error) {
    dispatch({ type: FAIL_SERVICE, payload: error.response.data });
  }
};

export const deleteServices = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/service/${id}`, config);
    dispatch(getServices());
  } catch (error) {
    dispatch({ type: FAIL_SERVICE, payload: error.response.data });
  }
};

export const addNewService = (newService) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_SERVICE });
  try {
    let { data } = await axios.post("/api/admin/service", newService, config);
    dispatch({ type: ADD_SERVICE, payload: data });
    dispatch(getServices());
  } catch (error) {
    dispatch({ type: FAIL_SERVICE, payload: error.response.data });
  }
};
/*--------------------------------- Categorys ---------------------------------*/
export const getCategorys = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_CATEGORY });
  try {
    let { data } = await axios.get(`/api/admin/category`, config);
    dispatch({ type: GET_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_CATEGORY, payload: error.response.data });
  }
};

export const editCategory = (id, editCategory) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/category/${id}`, editCategory, config);
    dispatch(getCategorys());
  } catch (error) {
    dispatch({ type: FAIL_CATEGORY, payload: error.response.data });
  }
};

export const deleteCategorys = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/category/${id}`, config);
    dispatch(getCategorys());
  } catch (error) {
    dispatch({ type: FAIL_CATEGORY, payload: error.response.data });
  }
};

export const addNewCategory = (newCategory) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_CATEGORY });
  try {
    let { data } = await axios.post("/api/admin/category", newCategory, config);
    dispatch({ type: ADD_CATEGORY, payload: data });
    dispatch(getCategorys());
  } catch (error) {
    dispatch({ type: FAIL_CATEGORY, payload: error.response.data });
  }
};
/*---------------------------------  Agents ---------------------------------*/
export const getAgents = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_AGENT });
  try {
    let { data } = await axios.get(`/api/admin/agent`, config);
    dispatch({ type: GET_AGENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_AGENT, payload: error.response.data });
  }
};
/*--------------------------------- Users ---------------------------------*/
export const getUsers = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_USER });
  try {
    let { data } = await axios.get(`/api/admin/user`, config);
    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const VerifyUser = (id, editUser) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/user/${id}`, editUser, config);
    dispatch(getAgents());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/user/${id}`, config);
    dispatch(getAgents());
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
