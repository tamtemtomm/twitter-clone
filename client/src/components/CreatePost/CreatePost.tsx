import { auth } from "../../firebase";
import ProfilePicture from "../../components/ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";
import { PostFunctionIconList } from "./PostFunctionList";
import { useState } from "react";
import randomstring from "randomstring";
import { addTweetRoute } from "../../routes/TweetRoute";

const CreatePost = () => {
  const [tweet, setTweet] = useState("");

  const handleSubmitTweet = () => {
    const newRecord = {
      _id: randomstring.generate(28),
      userId:
        auth.currentUser?.uid || localStorage.getItem("twitter-clone-auth-uid"),
      tweet: tweet,
      postTime: new Date(),
    };
    addTweetRoute(newRecord);
  };

  return (
    <div className="timeline-create-post-container">
      <ProfilePicture
        profilePicture={profilePicture}
        width="2.5rem"
        text="Profile"
      />
      <div className="timeline-create-post">
        <textarea
          name=""
          id=""
          value={tweet}
          className="timeline-post-text"
          placeholder="What is happening?!"
          onChange={(e) => {
            setTweet(e.target.value);
            console.log("Haha");
          }}
        ></textarea>
        <form
          className="timeline-post-function-container"
          onSubmit={handleSubmitTweet}
        >
          <div
            className="timeline-post-function"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "30%",
              paddingLeft: ".8rem",
            }}
          >
            {PostFunctionIconList.map((Icon) => (
              <Icon color="#1d9bf0" width="1rem" scale="1" />
            ))}
          </div>
          <button type="submit" className="hover-click">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
