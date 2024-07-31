import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  tweetId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  like:[{
    userId: String
  }],
  retweet:[{
    userId:String,
    tweetId: String
  }],
  comment:[{
    userId: String,
    tweetId: String
  }],
  view:[{
    userId: String
  }]

});

const TweetModel = mongoose.model("tweets", TweetSchema);
export default TweetModel;
