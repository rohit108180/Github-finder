// import logo from './logo.svg';
import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import "./App.css";
import AlertState from "./context/alert/alertState";
import Home from "./components/pages/Home";
// import alertState from "./context/alert/alertState";
// import { render } from 'z@testing-library/react';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='app'>
            <Navbar />
            <h1 className='text-center'>Welocome to my page</h1>
            <div className='container'>
              <Alert />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

/*
  // state = {
  //   users: [],
  //   user: {},
  //   repos :[],
  //   loading: false,
  //   alert: null,
  // };
  // async componentDidMount() {
  //   setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setState({ users: res.data, loading: false });
  // }
  */

//Search Github users

// const searchUsers = async (text) => {
//   setLoading(true);
//   setAlertState(null);

//   const res = await axios.get(
//     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   // setRepos(res.data.item);
//   setUsers(res.data.items);
//   setLoading(false);

//   // setState({ users: res.data.items, loading: false });
// };

// Get single github user
// const getUser = async (username) => {
//   setLoading(true);
//   setAlertState(null);
//   // setState({ loading: true, alert: null });

//   const res = await axios.get(
//     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setUser(res.data);
//   setLoading(false);
//   // setState({ user: res.data, loading: false });
// };

// getusers repo
// const getUserRepos = async (username) => {
//   setLoading(true);
//   setAlertState(null);
//   // setState({ loading: true, alert: null });

//   const res = await axios.get(
//     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );

//   setRepos(res.data);
//   setLoading(false);
//   // setState({ repos: res.data, loading: false });
// };

//clear usrs from
// const clearUsers = () => {
//   setUsers([]);
//   setAlertState(null);
//   // setState({ users: [], loading: false, alert: null }});
// };
