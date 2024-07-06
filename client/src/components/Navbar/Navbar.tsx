import React from 'react'
import {NavbarMenu, menuList} from './NavbarMenu'
import otherIcon from "../../assets/svg/bars-solid.svg";

interface UserType{
  user: any;
}

const Navbar = (props: UserType) => {
  return (
    <main className="navbar-container">
        {menuList?.map((menu) => (
          <NavbarMenu element={menu.icon} scale={menu.scale} text={menu.text} />
        ))}
        <button className="post-button">Post</button>
        <div className="navbar-profile-container">
          <div className="navbar-profile-image-container">
            <img src={props.user.profilePicture} alt="" />
          </div>
          <div className="navbar-profile-text-container">
            <h3 className="navbar-profile-username">{props.user.username}</h3>
            <h3 className="navbar-profile-tag">@{props.user.tag}</h3>
          </div>
          <div className="navbar-profile-other-container">
            <img src={otherIcon} alt="" />
          </div>
        </div>
      </main>
  )
}

export default Navbar