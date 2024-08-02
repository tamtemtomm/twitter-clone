// Import Style
import "./Home.css";
import defaultProfilePicture from "../../assets/account-profile-test.jpg";

// Import Dependencies
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

// Import Essential Component
import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
 
// Import Tweet Route and Interface
import { getTweetAllRoute } from "../../api/TweetAPI";
import { TweetInterface } from "../../Interface/TweetInterface";

export interface HomeProps {
  isAuth: boolean;
}

export const Home = ({ isAuth }: HomeProps) => {
  const [tweets, setTweets] = useState<TweetInterface[]>([]);
  
  // Get All Tweets
  useEffect(() => {
    getTweetAllRoute(setTweets)
    console.log(tweets) 
  }, [])

  // Get Auth data from firebase all localstoraage
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
