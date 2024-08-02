import "./Home.css";
// import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import defaultProfilePicture from "../../assets/account-profile-test.jpg";
import { auth } from "../../firebase";

// import { getAccountRoute } from "../../routes/AccountRoute";

// import { PostInterface } from "../../Interface/PostInterface";
// import { TweetInterface } from "../../Interface/TweetInterface";

interface HomeProps {
  isAuth: boolean;
}

export const Home = ({ isAuth }: HomeProps) => {
  // const [tweets, setTweets] = useState<TweetInterface[]>([]);
  // const [posts, setPosts] = useState<PostInterface[]>([]);
  // const [accounts, setAccounts] = useState({})

  // useEffect(() => {
  //   getAccountRoute("1q62jORZYBXz5unqZ8x14gMJ9gC2", setAccounts)
  //   console.log(accounts)
  // }, [])

  // useEffect(() => {
  //   getTweetAllRoute().then((res) => {
  //     setTweets(res);
  //     tweets.map((tweet) =>
  //       getAccountRoute(tweet.userId).then((res2) => {
  //         const newpost: PostInterface = {
  //           _id: tweet._id,
  //           userId: tweet.userId,
  //           username: res2.username,
  //           usertag: res2.usertag,
  //           tweet: tweet.tweet,
  //           postTime: tweet.postTime,
  //         };
  //         setPosts([...posts, newpost]);
  //       })
  //     );
  //   });
  //   console.log(posts);
  // }, []);

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
