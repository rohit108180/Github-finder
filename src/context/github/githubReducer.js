import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SEARCH_USER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
        return{
          ...state,
          user : action.payload, 
          loading:false  
        }
    case CLEAR_USER:
        return{
            ...state,
            users: [],
        }  
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_REPOS : 
      return{
        ...state,
        repos: action.payload,
        loading: false
      }  
    default:
      return state;
  }
};
