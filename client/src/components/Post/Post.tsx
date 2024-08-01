import "./Post.css";

import ProfilePicture from "../ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";

import { CommentIconComponent } from "../IconList";
import { RetweetIconComponent } from "../IconList";
import { LikeIconComponent } from "../IconList";
import { ViewIconComponent } from "../IconList";
import { BookmarkIconComponent } from "../IconList";
import { UploadIconComponent } from "../IconList";

import { PostInterface } from "../../context/PostContext";

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
            @{props.usertag} · {props.postTime}
          </p>
        </div>
        <p className="post-tweet">{props.tweet}</p>
        <div className="post-interaction-container">
          <div className="post-comment-container">
            <CommentIconComponent color="#71767b" width="1rem" />
            <p>11K</p>
          </div>
          <div className="post-retweet-container">
            <RetweetIconComponent color="#71767b" width="1rem" />
            <p>11K</p>
          </div>
          <div className="post-like-container">
            <LikeIconComponent color="#71767b" width="1rem" />
            <p>11K</p>
          </div>
          <div className="post-view-container">
            <ViewIconComponent color="#71767b" width="1rem" />
            <p>11K</p>
          </div>
          <div id="post-save-container">
            <>
              <BookmarkIconComponent color="#71767b" width=".8rem" />
            </>
            <>
              <UploadIconComponent color="#71767b" width=".8rem" />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
