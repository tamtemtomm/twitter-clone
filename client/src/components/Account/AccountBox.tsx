import "./AccountBox.css";

import ProfilePicture from "../ProfilePicture";
import { AccountProps } from "../../context/AccountContext";

const AccountBox = (props: AccountProps) => {
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
          <h4>@{props.usertag}</h4>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default AccountBox;
