import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  FAIL_AGENT,
  FAIL_CATEGORY,
  FAIL_USER,
  FAIL_RECLAMATION,
  FAIL_SERVICE,
  GET_AGENT,
  GET_CATEGORY,
  GET_USER,
  GET_RECLAMATION,
  GET_SERVICE,
  LOAD_ADMIN,
  LOAD_AGENT,
  LOAD_CATEGORY,
  LOAD_USER,
  LOAD_RECLAMATION,
  LOAD_SERVICE,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../constants/administrateur";

const initialState = {
  /*---------------------------------  Administrateur ---------------------------------*/
  admin: {},
  errors: [],
  isAuthAdmin: false,
  isloadAdmin: false,
  /*--------------------------------- Reclamation  ---------------------------------*/
  reclamations: [],
  isloadReaclamation: false,
  /*--------------------------------- Services ---------------------------------*/
  services: [],
  isloadService: false,
  /*--------------------------------- Categorys ---------------------------------*/
  categorys: [],
  isloadCategory: false,
  /*---------------------------------  Agents ---------------------------------*/
  agents: [],
  isloadAgent: false,
  /*--------------------------------- Clients ---------------------------------*/
  users: [],
  isloadUser: false,
};

const AdministrateurReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*---------------------------------  Administrateur ---------------------------------*/
    case LOAD_ADMIN:
      return { ...state, isloadAdmin: true };
    case LOGIN_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        admin: payload.admin,
        isloadAdmin: false,
        isAuthAdmin: true,
      };
    case CURRENT_ADMIN:
      return {
        ...state,
        admin: payload.findAdmin,
        isloadAdmin: false,
        isAuthAdmin: true,
      };
    case LOGOUT_ADMIN:
      localStorage.removeItem("token");
      return {
        admin: {},
        errors: [],
        isAuthAdmin: false,
        isloadAdmin: false,
      };
    case FAIL_ADMIN:
      return { ...state, errors: payload, isloadagents: false };
    /*--------------------------------- Reclamation  ---------------------------------*/
    case LOAD_RECLAMATION:
      return { ...state, isloadReaclamation: true };
    case GET_RECLAMATION:
      return {
        ...state,
        reclamations: payload.findReclamation,
        isloadReaclamation: false,
      };
    case FAIL_RECLAMATION:
      return { ...state, errors: payload, isloadReaclamation: false };
    /*--------------------------------- Services ---------------------------------*/
    case LOAD_SERVICE:
      return { ...state, isloadService: true };
    case GET_SERVICE:
      return {
        ...state,
        services: payload.findService,
        isloadService: false,
      };
    case FAIL_SERVICE:
      return { ...state, errors: payload, isloadService: false };
    /*--------------------------------- Categorys ---------------------------------*/
    case LOAD_CATEGORY:
      return { ...state, isloadCategory: true };
    case GET_CATEGORY:
      return {
        ...state,
        categorys: payload.findCategory,
        isloadCategory: false,
      };
    case FAIL_CATEGORY:
      return { ...state, errors: payload, isloadCategory: false };
    /*---------------------------------  Agents ---------------------------------*/
    case LOAD_AGENT:
      return { ...state, isloadAgent: true };
    case GET_AGENT:
      return {
        ...state,
        agents: payload.AgentList,
        isloadAgent: false,
      };
    case FAIL_AGENT:
      return { ...state, errors: payload, isloadAgent: false };
    /*--------------------------------- Users ---------------------------------*/
    case LOAD_USER:
      return { ...state, isloadUser: true };
    case GET_USER:
      return {
        ...state,
        users: payload.Userlist,
        isloadUser: false,
      };
    case FAIL_USER:
      return { ...state, errors: payload, isloadUser: false };
    /*-----------------------------------------------------------------------------------*/
    default:
      return { ...state };
  }
};

export default AdministrateurReducer;
