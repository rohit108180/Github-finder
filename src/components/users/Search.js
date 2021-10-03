import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";


const Search = () => {

  const  {searchUsers, users , clearUsers} = useContext(githubContext);
  const {setAlert }= useContext(alertContext);
  
  const showClear = users.length ? true: false ;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something ", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='from'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search users...'
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {

  setAlert: PropTypes.func.isRequired,
};

export default Search;
