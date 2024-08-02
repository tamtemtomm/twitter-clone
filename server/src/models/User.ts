import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  usertag: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
