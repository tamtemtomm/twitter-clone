interface NavbarMenuProps {
  Icon: any;
  text: string;
}

export const NavbarMenu = ({ Icon, ...props }: NavbarMenuProps) => {
  return (
    <div className="navbar-menu-container">
      <Icon color="white" width="1rem" scale="1.5" />
      <h3 style={{ fontWeight: "600", fontSize: "1.25rem" }}>{props.text}</h3>
    </div>
  );
};

export default NavbarMenu;
