import Icon from "../Icon";

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
