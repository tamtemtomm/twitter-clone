import Icon from "../Icon";

import XLogo from "../../assets/x-logo.png";
import HouseIcon from "../../assets/svg/house-solid.svg";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import NotificationIcon from "../../assets/svg/bell-solid.svg";
import EmailIcon from "../../assets/svg/envelope-regular.svg";
import PeopleIcon from "../../assets/svg/users-solid.svg";
import UserIcon from "../../assets/svg/user-solid.svg";
import OtherIcon from "../../assets/svg/bars-solid.svg";

export const menuList = [
  { element: XLogo, scale: "0.4", text: "" },
  { element: HouseIcon, scale: "0.35", text: "Home" },
  { element: SearchIcon, scale: "0.35", text: "Explore" },
  { element: NotificationIcon, scale: "0.35", text: "Notifications" },
  { element: EmailIcon, scale: "0.4", text: "Messages" },
  { element: EmailIcon, scale: "0.4", text: "Grok" },
  { element: PeopleIcon, scale: "0.4", text: "Communities" },
  { element: UserIcon, scale: "0.3", text: "Profile" },
  { element: OtherIcon, scale: "0.3", text: "More" },
];

interface NavbarMenuProps {
  scale: string;
  element: string;
  text: string;
}

export const NavbarMenu = (props: NavbarMenuProps) => {
  return (
    <div className="navbar-menu-container">
      <Icon {...props} width="4rem" />
      <h3 style={{fontWeight:"300", fontSize: "1.25rem"}}>{props.text}</h3>
    </div>
  );
};

export default NavbarMenu;
