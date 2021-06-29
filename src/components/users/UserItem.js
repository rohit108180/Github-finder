import React from "react";
import PropTypes from "prop-types";

//  const UserItem = (props) => {
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  // const {id ,login ,avatar_url, html_url} = props.user;

  return (
    <div className='card text-center'>
      <img src={avatar_url} className='round-img' style={{ width: "4rem" }} />

      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
