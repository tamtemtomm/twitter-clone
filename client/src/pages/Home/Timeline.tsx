import React from "react";
import "./Timeline.css";

import Icon from "../../components/Icon";
import ProfilePicture from "../../components/ProfilePicture";
import Post from "../../components/Post/Post";

import mediaIcon from "../../assets/svg/photo-film-solid.svg";
import profilePicture from "../../assets/account-profile-test.jpg";

const postFunctionList = [
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
];

const Timeline = () => {
  return (
    <section className="timeline-container">
      <div className="timeline-mode-container">
        <div className="timeline-for-you hover-click">For you</div>
        <div className="timeline-following hover-click">Following</div>
      </div>
      <div className="timeline-create-post-container">
        <ProfilePicture
          profilePicture={profilePicture}
          width="2.8rem"
          text="Profile"
        />
        <div className="timeline-create-post">
          <textarea
            name=""
            id=""
            className="timeline-post-text"
            placeholder="What is happening?!"
          ></textarea>
          <div className="timeline-post-function-container">
            <div className="timeline-post-function">
              {postFunctionList.map((post) => (
                <Icon {...post} />
              ))}
            </div>
            <button className="hover-click">Post</button>
          </div>
        </div>
      </div>
      <div className="post-container">
        <Post />
      </div>
    </section>
  );
};

export default Timeline;
