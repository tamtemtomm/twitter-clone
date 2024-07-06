import React from "react";
import "./Post.css";

import ProfilePicture from "../ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";

const Post = () => {
  return (
    <div className="post">
      <ProfilePicture
        profilePicture={profilePicture}
        width="3rem"
        text="Profile"
      />
      <div className="post-profile">
        <div className="post-profile-account">
          <b>#99</b>
          <p>@PartaiSocmed · 15h</p>
        </div>
        <p className="post-tweet">
          Avkor bodoh sejak berbentuk ovum. 
          <br></br><br></br>Pernyataan orang Koreanya secara
          tidak sadar dibenarkan oleh mbak2 ini meski niatnya membantah.
        </p>
      </div>
    </div>
  );
};

export default Post;
