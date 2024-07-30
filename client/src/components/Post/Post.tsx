import React from "react";
import "./Post.css";

import ProfilePicture from "../ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";


export interface PostInterface {
  userId: number;
  username: string;
  userTag: string;
  postTime: string;
  tweet: string;
}

const Post = (props: PostInterface) => {
  return (
    <div className="post">
      <ProfilePicture
        profilePicture={profilePicture}
        width="2.5rem"
        text="Profile"
      />
      <div className="post-profile">
        <div className="post-profile-account">
          <b>{props.username}</b>
          <p>
            @{props.userTag} · {props.postTime}
          </p>
        </div>
        <p className="post-tweet">{props.tweet}</p>
      </div>
    </div>
  );
};

export default Post;
