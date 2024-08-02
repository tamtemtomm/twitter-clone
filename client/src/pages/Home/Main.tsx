import Explore from "./Explore";
import "./Main.css";

import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
import { postList } from "../../components/Post/PostList";

const Main = () => {
  return (
    <main className="main-container">
      <section className="timeline-container">
        <div className="timeline-mode-container">
          <div className="timeline-for-you hover-click">For you</div>
          <div className="timeline-following hover-click">Following</div>
        </div>

        {localStorage.getItem("twitter-clone-isAuth") === "true" && (
          <CreatePost />
        )}

        <div className="post-container">
          {postList?.map((post) => (
            <Post {...post} />
          ))}
        </div>
      </section>
      <Explore />
    </main>
  );
};

export default Main;
