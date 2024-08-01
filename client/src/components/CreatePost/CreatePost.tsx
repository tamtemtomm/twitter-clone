import ProfilePicture from "../../components/ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";

import { MediaIconComponent } from "../IconList";
import { ImageIconComponent } from "../IconList";
import { PollIconComponent } from "../IconList";
import { EmoticonIconComponent } from "../IconList";
import { CalendarIconComponent } from "../IconList";

export const postFunctionList = [
  { Icon: MediaIconComponent, width: "2rem", text: "media", scale: ".6" },
  { Icon: ImageIconComponent, width: "2rem", text: "media", scale: ".6" },
  { Icon: PollIconComponent, width: "2rem", text: "media", scale: ".6" },
  { Icon: EmoticonIconComponent, width: "2rem", text: "media", scale: ".6" },
  { Icon: CalendarIconComponent, width: "2rem", text: "media", scale: ".6" },
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
            {postFunctionList.map(({ Icon, ...post }) => (
              <Icon color="#1d9bf0" width="1rem" scale="1" />
            ))}
          </div>
          <button className="hover-click">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
