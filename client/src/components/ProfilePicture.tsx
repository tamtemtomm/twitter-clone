import React from "react";

interface ProfilePictureType {
  profilePicture: string;
  width: string;
  text: string;
}

const ProfilePicture = (props: ProfilePictureType) => {
  return (
    <div
      className="profile-picture-container"
      style={{ minWidth: props.width, maxWidth: props.width }}
    >
      <img src={props.profilePicture} alt={props.text} />
    </div>
  );
};

export default ProfilePicture;
