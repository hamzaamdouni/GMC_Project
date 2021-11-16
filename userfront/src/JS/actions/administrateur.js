import axios from "axios";
import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  FAIL_RECLAMATION,
  GET_RECLAMATION,
  LOAD_ADMIN,
  LOAD_RECLAMATION,
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
