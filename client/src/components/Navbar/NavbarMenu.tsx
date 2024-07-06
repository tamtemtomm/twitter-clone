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
  { icon: XLogo, scale: "0.4", text: "" },
  { icon: HouseIcon, scale: "0.35", text: "Home" },
  { icon: SearchIcon, scale: "0.35", text: "Explore" },
  { icon: NotificationIcon, scale: "0.35", text: "Notification" },
  { icon: EmailIcon, scale: "0.4", text: "Messages" },
  { icon: EmailIcon, scale: "0.4", text: "Grok" },
  { icon: PeopleIcon, scale: "0.4", text: "Communities" },
  { icon: UserIcon, scale: "0.3", text: "Profile" },
  { icon: OtherIcon, scale: "0.3", text: "More" },
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
      <h3>{props.text}</h3>
    </div>
  );
};

export default NavbarMenu;
