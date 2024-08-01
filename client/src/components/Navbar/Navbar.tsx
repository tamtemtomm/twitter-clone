import "./Navbar.css";

import { NavbarMenu } from "./NavbarMenu";
import { NavbarMenuList } from "./NavbarMenuList";
import { OtherIconComponent } from "../IconList";
import XLogo from "../../assets/x-logo.png";

import ProfilePicture from "../ProfilePicture";
import profilePicture from "../../assets/account-profile-test.jpg";

import { AccountProps } from "../../context/AccountContext";

const Navbar = (props: AccountProps) => {
  return (
    <main className="navbar-container">
      <div className="x-logo-container" style={{width: "2rem", paddingLeft: "1rem"}}>
        <img src={XLogo} alt="" style={{ objectFit: "contain", width: "100%" }} />
      </div>

      {NavbarMenuList?.map((menu) => (
        <NavbarMenu Icon={menu.Icon} text={menu.text} />
      ))}
      <button className="post-button hover-click">Post</button>
      <div className="navbar-profile-container">
        <ProfilePicture
          profilePicture={profilePicture}
          width="2.3rem"
          text="Profile"
        />
        <div className="navbar-profile-text-container">
          <h3 className="navbar-profile-username">{props.username}</h3>
          <h3 className="navbar-profile-tag" style={{ fontWeight: "200" }}>
            @{props.usertag}
          </h3>
        </div>

        <OtherIconComponent color="white" width="1.25rem" scale="1" />
      </div>
    </main>
  );
};

export default Navbar;
