import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  tweet: {
    type: String,
    required: true,
  },
  postTime: {
    type: Date,
  },
  like: [
    {
      userId: String,
    },
  ],
  retweet: [
    {
      userId: String,
      tweetId: String,
    },
  ],
  comment: [
    {
      userId: String,
      tweetId: String,
    },
  ],
  view: [
    {
      userId: String,
    },
  ],
});

const TweetModel = mongoose.model("tweets", TweetSchema);
export default TweetModel;
