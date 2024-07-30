import Icon from "../../components/Icon";
import ProfilePicture from "../../components/ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";
import mediaIcon from "../../assets/svg/photo-film-solid.svg";

export const postFunctionList = [
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
  { element: mediaIcon, width: "2rem", text: "media", scale: ".6" },
];

const CreatePost = () => {
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
  );
};

export default CreatePost;
