import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tagName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String
  }
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
