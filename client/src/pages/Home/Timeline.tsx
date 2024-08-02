// Import Style
import "./Timeline.css";

// Import Components
import Post from "../../components/Post/Post";
import { postList } from "../../components/Post/PostList";
import CreatePost from "../../components/CreatePost/CreatePost";

const Timeline = () => {
  return (
    <section className="timeline-container">
      <div className="timeline-mode-container">
        <div className="timeline-for-you hover-click">For you</div>
        <div className="timeline-following hover-click">Following</div>
      </div>
      <CreatePost />

      <div className="post-container">
        {postList?.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
