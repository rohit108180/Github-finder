import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === ''){
      this.props.setAlert('Please Enter something ' , 'light');
    }else{
    this.props.searchUsers(this.state.text);
    this.state.text = "";
    }
  };

  render() {

    const {showClear , clearUsers} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='from'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>

        {showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
