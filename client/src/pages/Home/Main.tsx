import Explore from "./Explore";
import "./Main.css";

import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
import { postList } from "../../components/Post/PostList";
import { TweetInterface } from "../../Interface/TweetInterface";
import { PostInterface } from "../../Interface/PostInterface";
import { getAccountRoute } from "../../routes/AccountRoute";
import { useEffect, useState } from "react";
import { AccountInterface } from "../../Interface/AccountInterface";

interface MainInterface {
  tweets: TweetInterface[];
}

const Main = ({ tweets }: MainInterface) => {
  return (
    <main className="main-container">
      <section className="timeline-container">
        <div className="timeline-mode-container">
          <div className="timeline-for-you hover-click">For you</div>
          <div className="timeline-following hover-click">Following</div>
        </div>

        {/* {localStorage.getItem("twitter-clone-isAuth") === "true" && (
          <CreatePost />
        )} */}

        <CreatePost />

        <div className="post-container">
          {postList?.map((post) => (
            <Post {...post} key={post.userId} />
          ))}
        </div>
      </section>
      <Explore />
    </main>
  );
};

export default Main;
