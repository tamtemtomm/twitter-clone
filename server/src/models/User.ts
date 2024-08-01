import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
  },
  userTag: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String
  }
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
