import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import defaultProfilePicture from "../../assets/account-profile-test.jpg";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface HomeProps {
  isAuth: boolean;
}

export const Home = ({ isAuth }: HomeProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("twitter-clone-isAuth") !== "true") {
      navigate("/auth");
    }
  });
  const userAttribute = {
    _id: auth.currentUser?.uid,
    username: localStorage.getItem("twitter-clone-auth-username") || "username",
    usertag: localStorage.getItem("twitter-clone-auth-usertag") || "usertag",
    email:
      localStorage.getItem("twitter-clone-auth-email") || "email@gmail.com",
    profilePicture:
      localStorage.getItem("twitter-clone-auth-photoURL") ||
      defaultProfilePicture,
  };
  return (
    <div className="home-container">
      <Navbar {...userAttribute} />
      <Main />
    </div>
  );
};

export default Home;
