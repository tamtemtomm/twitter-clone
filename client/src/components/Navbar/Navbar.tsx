import "./Navbar.css"

import { NavbarMenu} from "./NavbarMenu";
import { NavbarMenuList } from "./NavbarMenuList";
import ProfilePicture from "../ProfilePicture";
import Icon from "../Icon";

import otherIcon from "../../assets/svg/more.svg";
import profilePicture from "../../assets/account-profile-test.jpg";

interface UserType {
  user: any;
}

const Navbar = (props: UserType) => {
  return (
    <main className="navbar-container">
      {NavbarMenuList?.map((menu) => (
        <NavbarMenu element={menu.element} scale={menu.scale} text={menu.text} />
      ))}
      <button className="post-button hover-click">Post</button>
      <div className="navbar-profile-container">
        <ProfilePicture
          profilePicture={profilePicture}
          width="2.3rem"
          text="Profile"
        />
        <div className="navbar-profile-text-container">
          <h3 className="navbar-profile-username">{props.user.username}</h3>
          <h3 className="navbar-profile-tag" style={{fontWeight: "200"}}>@{props.user.tag}</h3>
        </div>

        <Icon element={otherIcon} width="2rem" scale=".7" text="other" />
      </div>
    </main>
  );
};

export default Navbar;
