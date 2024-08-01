import React from "react";
import profilePicture from "../assets/account-profile-test.jpg"

interface ProfilePictureType {
  profilePicture?: string;
  width: string;
  text: string;
}

const ProfilePicture = (props: ProfilePictureType) => {
  return (
    <div
      className="profile-picture-container"
      style={{ minWidth: props.width, maxWidth: props.width }}
    >

      <img src={props.profilePicture || profilePicture} alt={props.text} />
    </div>
  );
};

export default ProfilePicture;
