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

const initialState = {
  user: {},
  agent: {},
  oneagent: null,
  agents: [],
  services: [],
  categorys: [],
  demandesUser: [],
  demandesAgent: [],
  commentsUser: [],
  commentsAgent: [],
  service: {},
  category: {},
  reclamation: {},
  newComment: {},
  newDemande: {},
  verifiedComment: [],
  errors: [],
  isAuth: false,
  isload: false,
  isloadagents: false,
  isloadDemande: false,
  isloadComment: false,
};

const visiteurReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return { ...state, isload: true };
    case LOAD_AGENTS:
      return { ...state, isloadagents: true };
    case REGISTER_USER:
      return { ...state, user: payload.user, isload: false };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, isload: false, isAuth: true };
    case CURRENT_USER:
      return { ...state, user: payload.findUser, isload: false, isAuth: true };
    case GET_SERVICES:
      return { ...state, services: payload.findServices, isload: false };
    case GET_CATEGORY:
      return { ...state, categorys: payload.findCategorys, isload: false };
    case SEND_RECLAMATION:
      return { ...state, reclamation: payload.reclamation, isload: false };
    case FAIL_DATA:
      return { ...state, errors: payload, isload: false, isloadagents: false };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: {},
        services: [],
        categorys: [],
        reclamation: {},
        errors: [],
        isAuth: false,
        isload: false,
      };

    /******************************************************** User  ********************************************************/

    case GET_ALL_AGENTS:
      return { ...state, agents: payload.AgentList, isloadagents: false };
    case GET_AGENTS_SERVICES:
      return { ...state, agents: payload.AgentList, isloadagents: false };
    case GET_AGENTS_CATEGORYS:
      return { ...state, agents: payload.AgentList, isloadagents: false };
    case GET_ONE_AGENT:
      return { ...state, oneagent: payload.OneAgent, isload: false };
    case ADD_COMMENT:
      return { ...state, newComment: payload.newComment, isload: false };
    case GET_VERIFIED_COMMENT:
      return { ...state, verifiedComment: payload.GetComment, isload: false };
    case ADD_DEMANDE:
      return {
        ...state,
        newDemande: payload.newDemande,
        isload: false,
      };
    case GET_USER_DEMANDES:
      return {
        ...state,
        demandesUser: payload.finddemande,
        isloadDemande: false,
      };
    case GET_USER_COMMENTS:
      return {
        ...state,
        commentsUser: payload.findcomment,
        isloadComment: false,
      };
    case LOAD_DEMANDE:
      return { ...state, isloadDemande: true };
    case LOAD_COMMENT:
      return { ...state, isloadComment: true };
    case FAIL_DEMANDE:
      return { ...state, errors: payload, isloadDemande: false };
    case FAIL_COMMENT:
      return { ...state, errors: payload, isloadComment: false };
    /******************************************************** agent  ********************************************************/

    case CURRENT_AGENT:
      return {
        ...state,
        agent: payload.findAgent,
        isload: false,
        isAuth: true,
      };
    case GET_ONE_SERVICE:
      return {
        ...state,
        service: payload.findService,
        isload: false,
        isAuth: true,
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        category: payload.findCategory,
        isload: false,
        isAuth: true,
      };

    case GET_AGENT_DEMANDES:
      return {
        ...state,
        demandesAgent: payload.finddemande,
        isloadDemande: false,
      };

    case GET_AGENT_COMMENTS:
      return {
        ...state,
        commentsAgent: payload.findcomment,
        isloadComment: false,
      };

    default:
      return { ...state };
  }
};

export default visiteurReducer;
