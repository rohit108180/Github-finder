// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github users
  searchUsers = async (text) => {
    
    this.setState({ loading: true, alert : null});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data.items);

    this.setState({ users: res.data.items, loading: false });
  };

  //clear usrs from
  clearUsers = () => this.setState({ users: [], loading: false , alert : null});

  setAlert = (msg, type)=>{
    this.setState({alert : {msg: msg, type: type} , users :[]});
    setTimeout(() => this.setState({alert :null}) ,2000)
  }

  render() {
    // const numbers = [1, 2, 3, 4];
    return (
      <div className='app'>
        <Navbar />
        <h1 className='text-center'>Welocome to my page</h1>
        <div className='container'>
          <Alert alert = {this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert = {this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
