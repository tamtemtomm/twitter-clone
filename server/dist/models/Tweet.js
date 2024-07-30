"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TweetSchema = new mongoose_1.default.Schema({
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
});
const TweetModel = mongoose_1.default.model("tweets", TweetSchema);
exports.default = TweetModel;
