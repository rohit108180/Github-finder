import React, { useReducer } from "react";
import axios from "axios";
// import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {  
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
} from "../types";
import githubContext from "./githubContext";


let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
  githubClientId = githubClientId;
  githubClientSecret = githubClientSecret; 
}
else{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET; 

}


const GithubState = (props) => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    laoding: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, intialState);

  // Search Users

  
  const searchUsers = async (text) => {
    setLoading();
    // setAlertState(null);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    // 
    // setUsers(res.data.items);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    
    })
    // setLoading(false);

    // setState({ users: res.data.items, loading: false });
  };

  //Get Users

  const getUser = async (username) => {
    setLoading();
    // setAlertState(null);
    // setState({ loading: true, alert: null });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    // setUser(res.data);
    dispatch({type: GET_USER, payload: res.data});
    // setLoading(false);
    // setState({ user: res.data, loading: false });
  };

  //Get repos

  const getUserRepos = async (username) => {
    setLoading();
    // setAlertSta  te(null);
    // setState({ loading: true, alert: null });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({type: GET_REPOS , payload: res.data});
    // setRepos(res.data);
    // setLoading(false);
    // setState({ repos: res.data, loading: false });
  };

  //clear user

  const clearUsers = () => dispatch({type: CLEAR_USER});
  

  //Set loading
  const setLoading = () => dispatch({type: SET_LOADING })

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        laoding: state.laoding,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
