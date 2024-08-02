//Import Style
import "./Main.css";

//Import Essential Components
import Explore from "./Explore";
import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
import { postList } from "../../components/Post/PostList";

//Import Tweet Interface
import { TweetInterface } from "../../Interface/TweetInterface";

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
