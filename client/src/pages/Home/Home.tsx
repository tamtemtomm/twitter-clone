import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import profilePicture from "../../assets/account-profile-test.jpg";

export const Home = () => {
  const userAttribute = {
    username: "timo widyanvolta",
    usertag: "widyanvolta",
    profilePicture: profilePicture,
  };

  return (
    <div className="home-container">
      <Navbar {...userAttribute} />
      <Main />
    </div>
  );
};

export default Home;
