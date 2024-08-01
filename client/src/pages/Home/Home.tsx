import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import defaultProfilePicture from "../../assets/account-profile-test.jpg";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  isAuth: boolean;
}

export const Home = ({ isAuth }: HomeProps) => {
  const navigate = useNavigate();
  if (localStorage.getItem("twitter-clone-isAuth") === null) {
    navigate("/auth");
  }

  const userAttribute = {
    _id: auth.currentUser?.uid,
    username: auth.currentUser?.displayName || "username",
    usertag: "widyanvolta",
    email: auth.currentUser?.email || "email@gmail.com",
    profilePicture: auth.currentUser?.photoURL || defaultProfilePicture,
  };

  return (
    <div className="home-container">
      <Navbar {...userAttribute} />
      <Main />
    </div>
  );
};

export default Home;
