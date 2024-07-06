import React from "react";
import "./Timeline.css";
import Icon from "../../components/Icon";
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
        <div className="timeline-for-you">For you</div>
        <div className="timeline-following">Following</div>
      </div>
      <div className="timeline-create-post-container">
        <div className="timeline-profile-picture-container">
          <img src={profilePicture} alt="" />
        </div>
        <div className="timeline-create-post">
          <textarea
            name=""
            id=""
            className="timeline-post-text"
            placeholder="What is Happening?!"
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
    </section>
  );
};

export default Timeline;
