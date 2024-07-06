import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import profilePicture from "../../assets/account-profile-test.jpg";

export const Home = () => {

  const userAttribute = {
    username: "timo widyanvolta",
    tag: "widyanvolta",
    profilePicture: profilePicture,
  }

  return (
    <div className="home-container">
      <Navbar user={userAttribute}/>
      <Main/>
    </div>
  );
};

export default Home;
