import { useEffect, useState } from "react";
import "./Home.css";

// Import Essential Component
import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";

// Impoot tools
import defaultProfilePicture from "../../assets/account-profile-test.jpg";
import { auth } from "../../firebase";
import { getTweetAllRoute } from "../../routes/TweetRoute";
import { TweetInterface } from "../../Interface/TweetInterface";

interface HomeProps {
  isAuth: boolean;
}

export const Home = ({ isAuth }: HomeProps) => {
  const [tweets, setTweets] = useState<TweetInterface[]>([]);

  useEffect(() => {
    getTweetAllRoute(setTweets)
    console.log(tweets) 
  }, [])

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
      <Main tweets={tweets}/>
    </div>
  );
};

export default Home;
