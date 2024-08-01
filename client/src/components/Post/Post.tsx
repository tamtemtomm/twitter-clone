import "./Post.css";

import ProfilePicture from "../ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";
import Icon from "../Icon";

import postCommentIcon from "../../assets/comment.svg";
import postRetweetIcon from "../../assets/retweet.svg";
import postLikeIcon from "../../assets/like.svg";
import postViewIcon from "../../assets/view.svg";
import postBookmarkIcon from "../../assets/bookmark.svg";
import postUploadIcon from "../../assets/upload.svg";

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
            <Icon
              element={postCommentIcon}
              width="1rem"
              text="post-comment"
              scale="1"
            />
            <p>11K</p>
          </div>
          <div className="post-retweet-container">
            <Icon
              element={postRetweetIcon}
              width="1rem"
              text="post-comment"
              scale="1"
            />
            <p>11K</p>
          </div>
          <div className="post-like-container">
            <Icon
              element={postLikeIcon}
              width="1rem"
              text="post-comment"
              scale="1"
            />
            <p>11K</p>
          </div>
          <div className="post-view-container">
            <Icon
              element={postViewIcon}
              width="1rem"
              text="post-comment"
              scale="1"
            />
            <p>11K</p>
          </div>
          <div id="post-save-container">
            <>
              <Icon
                element={postBookmarkIcon}
                width="1rem"
                text="post-comment"
                scale=".8"
              />
            </>
            <>
              <Icon
                element={postUploadIcon}
                width="1rem"
                text="post-comment"
                scale=".8"
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
