interface NavbarMenuProps {
  Icon: any;
  text: string;
}

export const NavbarMenu = ({ Icon, ...props }: NavbarMenuProps) => {
  return (
    <div className="navbar-menu-container">
      <Icon color="white" width="1rem" scale="1.2" />
      <h3 style={{ fontWeight: "600", fontSize: "1.2rem" }}>{props.text}</h3>
    </div>
  );
};

export default NavbarMenu;
