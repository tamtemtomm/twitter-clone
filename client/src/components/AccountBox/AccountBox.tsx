import React from "react";
import ProfilePicture from "../../components/ProfilePicture";
import "./AccountBox.css"

interface AccountBoxProps{
  username: string,
  userTag: string,
  profilePicture: string
}

const AccountBox = (props: AccountBoxProps) => {
  return (
    <div className="follow-recommendation-list-container">
      <div className="account-box">
        <ProfilePicture
          profilePicture={props.profilePicture}
          width="2.4rem"
          text="profilePicture"
        />
        <div className="account-box-text-container">
          <h3>{props.username}</h3>
          <h4>@{props.userTag}</h4>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default AccountBox;
