import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import profilePicture from "../../assets/account-profile-test.jpg";
import { useNavigate } from "react-router-dom";


interface HomeProps{
  isAuth: boolean
}

const userAttribute = {
  username: "timo widyanvolta",
  usertag: "widyanvolta",
  profilePicture: profilePicture,
};

export const Home = ({isAuth}: HomeProps) => {

  const navigate = useNavigate()
  if (localStorage.getItem("twitter-clone-isAuth") === null){
    navigate("/auth")
  }

  return (
    <div className="home-container">
      <Navbar {...userAttribute} />
      <Main />
    </div>
  );
};

export default Home;
