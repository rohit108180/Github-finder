import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

//  const UserItem = (props) => {
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  // const {id ,login ,avatar_url, html_url} = props.user;

  return (
    <div className='card text-center'>
      <img src={avatar_url} className='round-img' style={{ width: "4rem" }} />

      <h3>{login}</h3>

      <div>
        <Link  to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
