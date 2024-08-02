import axios from "axios";
import { PORT } from "../utilities/Variables";
import { TweetInterface } from "../Interface/TweetInterface";

export const addTweetRoute = (newTweet: TweetInterface) => {
  axios
    .post(`${PORT}/tweet-records/createTweet`, newTweet)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getTweetAllRoute = (setState: (tweets: any) => void) => {
  axios
    .get(`${PORT}/tweet-records/getTweet`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
