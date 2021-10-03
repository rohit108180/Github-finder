import React, { useContext } from "react";
import PropTypes from "prop-types";
import ReposItem from "./ReposItem";
import githubContext from "../../context/github/githubContext";

const Repos = () => {

  const { repos} = useContext(githubContext);

  return repos.map((repo)=> <ReposItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.func.isRequired,
};

export default Repos;